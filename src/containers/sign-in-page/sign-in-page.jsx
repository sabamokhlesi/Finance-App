import React from 'react'
import './sign-in-page.scss'
import {Link} from 'react-router-dom'
import SignInImg from '../../sign-in-img.png'
class SignInPage extends React.Component{
    
        render(){
            return(
                <div className='sign-in-page'>
                   <h1>Welcome Back! Sign In And Start Using Budget Manager</h1>
                   <div className='sign-in'>
                        <div className='sign-in-img'>
                            <img src={SignInImg} alt="sign in here"/>
                        </div>
                        <div className='sign-in-form'>
                            <div class="sign-in-form-title h3">Start Budgeting!</div>
                            <div class="sign-in-form-fields">
                                <div class="sign-in-form-field"><input type="email" class="sign-in-form-username" placeholder="Email" /></div>
                                <div class="sign-in-form-field"><input type="password" class="sign-in-form-password" placeholder="Password" /></div>
                                <h5>Forgot Your Password? <a href="/">Click Here</a></h5>
                            </div>
                            <button class="btn btn-primary sign-in-btn">Sign in</button>
                            <div class="sign-in-to-sign-up">
                                <h4>Do not have an account? <Link to="/sign-up" className='sign-in-to-sign-up-link'> Sign Up</Link></h4>
                            </div>
                    </div>
                </div>     
            </div>
            )
        }
            
       
}


export default SignInPage