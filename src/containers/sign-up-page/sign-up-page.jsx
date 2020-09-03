import React from 'react'
import './sign-up-page.scss'
import {Link} from 'react-router-dom'
import SignUpImg from '../../sign-up-img.png'
class SignUpPage extends React.Component{
    
        render(){
            return(
                <div className='sign-up-page'>
                   <h1>Create Your Account Now, It's Free To Sign Up!</h1>
                   <div className='sign-up'>
                    <div className='sign-up-form'>
                            <div class="sign-up-form-title h3">Start Budgeting!</div>
                            <div class="sign-up-form-fields">
                                <div class="sign-up-form-field"><input type="email" class="sign-up-form-username" placeholder="Email" /></div>
                                <div class="sign-up-form-field"><input type="password" class="sign-up-form-password" placeholder="Password" /></div>
                                <div class="sign-up-form-field"><input type="password" class="sign-up-form-password" placeholder="Repeat Your Password" /></div>
                                <input type="checkbox" id="termsAndConditions" name="termsAndConditions" value="Bike"></input>
                                <label for="termsAndConditions" className='sign-up-form-terms'> I agree to the <Link to="/" className='sign-up-to-sign-in-link'>Terms and Conditions</Link></label><br></br>
                            </div>
                            <button class="btn btn-primary sign-up-btn">Sign Up</button>
                            <div class="sign-up-to-sign-in">
                                <h4>Already have an account? <Link to="/sign-in" className='sign-up-to-sign-in-link'> Sign In</Link></h4>
                            </div>
                    </div>
                    <div className='sign-up-img'>
                        <img src={SignUpImg} alt="sign up here"/>
                    </div>
                </div>     
                </div>
            )
        }
            
       
}


export default SignUpPage