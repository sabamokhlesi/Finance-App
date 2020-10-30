import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'
import './dashboard-left.scss'
import {NavLink} from 'react-router-dom'
import logo from '../../../logo.jpg'
import { FaHome,FaRegCreditCard,FaUserCog,FaSlidersH,FaFunnelDollar } from "react-icons/fa";
import dashboardLeftVector from '../../../dashboard-left.png'

class DashboardLeft extends React.Component{
    render(){
        return(
            <div className='dashboard-left'>
                    <div className='dashboard-left-logo'>
                        <img src={logo} alt="MyMoney logo"/>
                    </div>
                    <div className='dashboard-left-options'>
                        <div className='dashboard-left-options-unit'>
                            <FaHome color='#6D6D6D' size='2rem'/>
                            <NavLink activeClassName='dashboard-left-options-active' to='/' className='btn'>Overview</NavLink>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <FaRegCreditCard color='#6D6D6D' size='2rem'/>
                            <NavLink activeClassName='dashboard-left-options-active' exact to='/list' className='btn'>Transactions</NavLink>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <FaUserCog color='#6D6D6D' size='2rem'/>
                            <NavLink activeClassName='dashboard-left-options-active' exact to='/settings' className='btn'>Settings</NavLink>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <FaSlidersH color='#6D6D6D' size='2rem'/>
                            <h4>Budget Settings</h4>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <FaFunnelDollar color='#6D6D6D' size='2rem'/>
                            <h4>Goals</h4>
                        </div>
                    </div>
                    <div className='dashboard-left-vector'>
                        <img src={dashboardLeftVector} alt="dashboard vector"/>
                        <button className='btn btn-four' onClick ={this.props.onLogOut}>Log Out</button>
                    </div>
                </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{return{onLogOut : () => dispatch(actions.logout())}}
export default connect(null,mapDispatchToProps)(DashboardLeft)