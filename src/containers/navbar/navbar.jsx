import React from 'react'
import  './navbar.scss'
import NavItems from './nav-items/nav-items' 
import NavItem from './nav-items/nav-item/nav-item'
import logo from '../../logo.jpg'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'

class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <NavItem link='/'><img src={logo} alt='logo' className='navbar-logo'/></NavItem>
                <NavItems/>
                <NavItem link={this.props.isloggedIn?'sign-in':"sign-up"}  className='btn btn-primary' activeClassName='btn btn-four' clicked ={this.props.onLogOut}>{this.props.isloggedIn?'LogOut':"Register!"}</NavItem>
            </div>
        )
    }
}
const mapStateToProps = state =>{ return{ isloggedIn : state.auth.token !==null}}
const mapDispatchToProps = dispatch =>{return{onLogOut : () => dispatch(actions.logout())}}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)