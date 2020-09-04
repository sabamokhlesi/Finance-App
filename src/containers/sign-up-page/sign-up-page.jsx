import React from 'react'
import './sign-up-page.scss'
import {Link} from 'react-router-dom'
import SignUpImg from '../../sign-up-img.png'
import {connect} from 'react-redux'
class SignUpPage extends React.Component{
    state = {
        signUpMessage : null,
        formIsValid : true
    }
    submitHandler(event){
        let message = null
        let valid = true
        const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        event.preventDefault()

        if (!emailPattern.test(this.signUpEmail.value)){
            message= 'invalid email'
            valid = false
        } if (this.signUpPass.value.trim().length < 6) {
            message = 'password is too short'
            valid = false
        } if(this.signUpPassRepeat.value !== this.signUpPass.value){
            message = 'Enter the same password'
            valid = false
        } if(!this.termsAndConditions.checked) {
            message = 'Please agree to the terms'
            valid = false
        }if(message === null){
            message = 'Sending the information...'
            console.log('sending signup info')
        } 
        this.setState({signUpMessage:message,formIsValid:valid})
    }

    
    render(){
        return(
            <div className='sign-up-page'>
                <h1>Create Your Account Now, It's Free To Sign Up!</h1>
                <form className='sign-up'>
                <div className='sign-up-form'>
                        <div className="sign-up-form-title h3">Start Budgeting!</div>
                        <p className='sign-up-message'>{this.state.signUpMessage}</p>
                        <div className="sign-up-form-fields">
                            <div className="sign-up-form-field"><input key='sign-up-email' ref={input => {this.signUpEmail = input;}} type="email" className="sign-up-form-username" placeholder="Email" /></div>
                            <div className="sign-up-form-field"><input key='sign-up-pass' ref={input => {this.signUpPass = input;}} type="password" className="sign-up-form-password" placeholder="Password" /></div>
                            <div className="sign-up-form-field"><input key='sign-up-pass-repeat' ref={input => {this.signUpPassRepeat = input;}} type="password" className="sign-up-form-password" placeholder="Repeat Your Password" /></div>
                            <input type="checkbox" id="termsAndConditions" name="termsAndConditions" ref={input => {this.termsAndConditions = input;}}></input>
                            <label htmlFor="termsAndConditions" className='sign-up-form-terms'> I agree to the <Link to="/" className='sign-up-to-sign-in-link'>Terms and Conditions</Link></label><br></br>
                        </div>
                        <input type="submit" className="btn btn-primary sign-up-btn" value='Sign Up' onClick={this.submitHandler.bind(this)}></input>
                        <div className="sign-up-to-sign-in">
                            <h4>Already have an account? <Link to="/sign-in" className='sign-up-to-sign-in-link'> Sign In</Link></h4>
                        </div>
                </div>
                <div className='sign-up-img'>
                    <img src={SignUpImg} alt="sign up here"/>
                </div>
            </form>     
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isLogedIn: state.auth.token !== null
    };
}

const mapDispatchToProps = () => {
    return{

    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage)