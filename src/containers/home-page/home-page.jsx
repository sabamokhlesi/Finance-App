import React from 'react'
import {Link} from 'react-router-dom'
import './home-page.scss'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import HeaderImg from '../../headerImg.png'
class HomePage extends React.Component{
    
        render(){
            return(
                <div className='home-page'>
                   <div className='header'>
                       <div className='header-text'>
                            <h1 className='h1'>Never loose track of your spendings again</h1>
                            <h4 className='h4'>We are here to help you manage your budget and reach your financial goals. It's so simple, start now!</h4>
                            {this.props.isloggedIn?<Link to='my-list' className='btn btn-primary'>Check Your List</Link>:<Link to='sign-up' className='btn btn-primary'>Sign Up For Free</Link>}
                        </div>
                        <img src={HeaderImg} alt="Budget App" className='header-img'/> 
                   </div>
                </div>
            )
        }
            
       
}

const mapStateToProps = state =>{ return{ isloggedIn : state.auth.token !==null}}
const mapDispatchToProps = dispatch =>{return{onLogOut : () => dispatch(actions.logout())}}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)