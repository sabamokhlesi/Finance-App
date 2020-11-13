import React from 'react'
import  './navbar.scss'
import NavItems from './nav-items/nav-items' 
import NavItem from './nav-items/nav-item/nav-item'
import logo from '../../images/logo.jpg'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'

class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <NavItem link='/'><img src={logo} alt='logo' className='navbar-logo'/></NavItem>
                <NavItems/>
                <NavItem link={this.props.isloggedIn?'sign-in':"sign-up"}  className='btn btn-four nav-register-btn' activeClassName='btn btn-primary' clicked ={this.props.onLogOut}>{this.props.isloggedIn?'LogOut':"Register!"}</NavItem>
                <div className="navigation">
                    <input type="checkbox" className="navigation-checkbox" id="navi-toggle"/>
                    <label for="navi-toggle" className="navigation-btn"><span className="navigation-icon">&nbsp;</span></label>
                    <div className="navigation-background">&nbsp;</div>
                    <nav className="navigation-nav">
                        <ul className="navigation-list">
                            <li className="navigation-item"><NavItem key='home-nav-home' link='/' exact className='navigation-link' activeClassName='navigation-link'>Home</NavItem></li>
                            <li className="navigation-item"><a href='/#whyus' className='navigation-link' activeClassName='navigation-link'>About</a></li>
                            <li className="navigation-item"><NavItem key='home-nav-login' link='/sign-in' className='navigation-link' activeClassName='navigation-link'>Log In</NavItem></li>
                        </ul>
                    </nav>
                </div>
                {/* <FaEllipsisV/> */}
            </div>
        )
    }
}
const mapStateToProps = state =>{ return{ isloggedIn : state.auth.token !==null}}
const mapDispatchToProps = dispatch =>{return{onLogOut : () => dispatch(actions.logout())}}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)