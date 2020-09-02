import React from 'react'
import  './navbar.scss'
import NavItems from './nav-items/nav-items' 
import NavItem from './nav-items/nav-item/nav-item'
import logo from '../../logo.png'

const navBar = (props) =>(
    <div className='navbar'>
        <img src={logo} alt='logo' className='navbar-logo'/>
        <NavItems/>
        <NavItem link='auth'  className='btn btn-primary' activeClassName='btn btn-primary'>Register!</NavItem>
    </div>
)
export default navBar