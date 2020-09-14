import React from 'react'
import './nav-items.scss'
import NavItem from './nav-item/nav-item'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

class NavItems extends React.Component{
        render(){
            return(
                <div className='nav-items'>
                    <NavItem link='/' exact className='btn btn-three' activeClassName='btn btn-secondary'>Home</NavItem>
                    <NavItem link='/about' className='btn btn-three' activeClassName='btn btn-secondary'>About</NavItem>
                    <NavItem link='/contact' className='btn btn-three' activeClassName='btn btn-secondary'>Contact</NavItem>
                    {this.props.isloggedIn?[<NavItem link='/my-list' className='btn btn-three' activeClassName='btn btn-secondary' onClick={this.props.logout}>My List</NavItem>
                    ,<NavItem link='/budget-settings' className='btn btn-three' activeClassName='btn btn-secondary'>Budget Settings</NavItem>]
                    :<NavItem link='/sign-in' className='btn btn-three' activeClassName='btn btn-secondary'>Sign In</NavItem>}
                </div>
            )
        }    
}

const mapStateToProps = state =>{ return{ isloggedIn : state.auth.token !==null}}
const mapDispatchToProps = dispatch =>{return{onLogOut : () => dispatch(actions.logout())}}

export default connect(mapStateToProps,mapDispatchToProps)(NavItems)