import React from 'react'
import  './navbar.scss'
import NavItems from './nav-items/nav-items' 
import NavItem from './nav-items/nav-item/nav-item'
import logo from '../../logo.png'

const navBar = (props) =>(
    <div className='navbar'>
        <NavItem link='/'><img src={logo} alt='logo' className='navbar-logo'/></NavItem>
        <NavItems/>
        <NavItem link='sign-up'  className='btn btn-primary' activeClassName='btn btn-four'>Register!</NavItem>
    </div>
)
export default navBar