import React from 'react'
import './nav-items.scss'
import NavItem from './nav-item/nav-item'

class NavItems extends React.Component{
    
        render(){
            return(
                <div className='nav-items'>
                    <NavItem link='/' exact className='btn btn-three' activeClassName='btn btn-secondary'>Home</NavItem>
                    <NavItem link='/about' className='btn btn-three' activeClassName='btn btn-secondary'>About</NavItem>
                    <NavItem link='/contact' className='btn btn-three' activeClassName='btn btn-secondary'>Contact</NavItem>
                    <NavItem link='/sign-in' className='btn btn-three' activeClassName='btn btn-secondary'>Sign In</NavItem>
                </div>
            )
        }
            
       
}


export default NavItems