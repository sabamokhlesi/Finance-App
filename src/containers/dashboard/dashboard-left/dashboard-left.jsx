import React from 'react'
import './dashboard-left.scss'
import {NavLink} from 'react-router-dom'
import logo from '../../../images/logo.jpg'
import { FaHome,FaRegCreditCard,FaUserCog,FaSlidersH} from "react-icons/fa";
import dashboardLeftVector from '../../../images/dashboard-left.png'

function dashboardLeft (props){
        return(
            <div className='dashboard-left' {...props}>
                    <div className='dashboard-left-logo'>
                        <img src={logo} alt="MyMoney logo"/>
                    </div>
                    <div className='dashboard-left-options'>
                        <div className='dashboard-left-options-unit'>
                            <NavLink activeClassName='dashboard-left-options-active' to='/' exact className='btn'><FaHome color='inherit' size='2rem'/> &nbsp; Overview</NavLink>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <NavLink activeClassName='dashboard-left-options-active' exact to='/list' className='btn'><FaRegCreditCard color='inherit' size='2rem'/>  &nbsp; Transactions</NavLink>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <NavLink activeClassName='dashboard-left-options-active' exact to='/details' className='btn'><FaSlidersH color='inherit' size='2rem'/>  &nbsp; Budget Details</NavLink>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <NavLink activeClassName='dashboard-left-options-active' exact to='/settings' className='btn'><FaUserCog color='inherit' size='2rem'/>  &nbsp; Settings</NavLink>
                        </div>
                        {/* <div className='dashboard-left-options-unit'>
                            <NavLink activeClassName='dashboard-left-options-active' exact to='/goals' className='btn'><FaFunnelDollar color='inherit' size='2rem'/>  &nbsp; Goals</NavLink>
                        </div> */}
                    </div>
                    <div className='dashboard-left-vector'>
                        <img src={dashboardLeftVector} alt="dashboard vector"/>
                        <button className='btn btn-four' onClick ={props.onLogOut}>Log Out</button>
                    </div>
                </div>
        )
    
}

export default dashboardLeft