import React from 'react'
import {Link} from 'react-router-dom'
import './home-page.scss'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import HeaderImg from '../../headerImg3.png'
import whyUs1 from '../../1111.jpg'
import whyUs2 from '../../2222.jpg'
import whyUs3 from '../../3333.jpg'
import stepsImg from '../../steps.png'
import featuresImg from '../../features.jpg'
class HomePage extends React.Component{
    
        render(){
            return(
                <div className='home-page'>
                   <div className='header' id='home-hero'>
                       <div className='header-text'>
                            <h5>--- Your budgeting app</h5>
                            <h1 className='h1'>Never Loose Track Of Your Spendings Again!</h1>
                            <h4 className='h4'>We are here to help you manage your budget and reach your financial goals. It's so simple, start now!</h4>
                            <div className='header-btn'>
                                {this.props.isloggedIn?<Link to='my-list' className='btn btn-four'>Your status</Link>:<Link to='sign-up' className='btn btn-four'>Sign Up For Free</Link>}
                                {this.props.isloggedIn?null:<Link to='log-in' className='btn btn-primary'>Log In</Link>}
                            </div>
                        </div>
                        <img src={HeaderImg} alt="Budget App" className='header-img'/> 
                   </div>
                   <div className="why-us-section">
                       <h2>Why Us?</h2>
                       <div className="why-us-section-body">
                           <div className='why-us-section-box'>
                               <img src={whyUs2} alt="why us 2"/>
                               <h3>It's Free!</h3>
                               <p>You Can Use This App Totally Free</p>
                           </div>
                           <div className='why-us-section-box'>
                               <img src={whyUs1} alt="why us 1"/>
                               <h3>It's Easy!</h3>
                               <p>Working With This App Is Aasy As Pie</p>
                           </div>
                           <div className='why-us-section-box'>
                               <img src={whyUs3} alt="why us 3"/>
                               <h3>It's Helpful!</h3>
                               <p>You Will Finally Know How You spent All That Money</p>
                           </div>
                       </div>
                   </div>
                   <div className='how-it-works-section' id='whyus'>
                        <h2>How It Works</h2>
                        <div className='how-it-works-section-body'>
                            <img src={stepsImg} alt="how it works"/>
                            <div className='how-it-works-section-text'>
                                <h3>Just Follow These 3 Steps</h3>
                                <p>1. Sign up and set your monthly budget goals.</p>
                                <p>2. Add your transactions on a daily basis.</p>
                                <p className='margin-bottom-3'>3. Check your financial status in your account.</p>
                                {this.props.isloggedIn?<Link to='my-list' className='btn btn-four'>Check Your Status</Link>:<Link to='sign-up' className='btn btn-four'>Sign Up Here</Link>}
                            </div>
                        </div>
                   </div>
                   <div className='features-section'>
                        <h2>What We Offer</h2>
                        <div className='features-section-body'>
                            <div className='features-section-text'>
                                <h3>Features you'll love</h3>
                                <p>- You can filter your spendings by date, category, etc.</p>
                                <p>- You get a full report of your financial status.</p>
                                <p>- You will be alarmed when you get close to your budget limits.</p>
                                <p>- Multiple family members can use the same account.</p>
                            </div>
                            <img src={featuresImg} alt="features"/>
                        </div>
                   </div>
                   <footer className="footer">
                        <div className="footer-cta">
                            <h2>Wanna Try?</h2>
                            <Link to='sign-up' className="footer-cta-btn">
                                <span className="footer-cta-btn-visible">Register now</span> 
                                <span className="footer-cta-btn-invisible">It's easy</span>
                            </Link>
                        </div>
                        <div className="footer-nav">
                                <p className="footer-copyright">&copy;Copyright 2020 all rights reserved for <span>Saba Mokhlesi</span></p>
                            <div className="footer-nav-lists">
                                <a href='#whyus'>About</a >
                                <a href='#home-hero'>Home</a >
                                <Link to='sign-up'>Register</Link >
                                <Link to='log-in'>Log In</Link >
                            </div>
                        </div>
                    </footer>
                </div>
            )
        }
            
       
}

const mapStateToProps = state =>{ return{ isloggedIn : state.auth.token !==null}}
const mapDispatchToProps = dispatch =>{return{onLogOut : () => dispatch(actions.logout())}}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)