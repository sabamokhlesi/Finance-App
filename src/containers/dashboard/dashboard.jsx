import React from 'react'
import './dashboard.scss'
import logo from '../../logo.jpg'
import dashboardLeftVector from '../../dashboard-left.png'
import dashboardBodyTop from '../../dashboard-body-1.png'
import barchart from '../../barchart.png'
import { FaHome } from "react-icons/fa";
class Dashoard extends React.Component{
    render(){
        return(
            <div className='dashboard'>
                <div className='dashboard-left'>
                    <div className='dashboard-left-logo'>
                        <img src={logo} alt="MyMoney logo"/>
                    </div>
                    <div className='dashboard-left-options'>
                        <div className='dashboard-left-options-unit'>
                            <FaHome color='#6D6D6D' size='2rem'/>
                            <h4>Overview</h4>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <FaHome color='#6D6D6D' size='2rem'/>
                            <h4>Transactions</h4>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <FaHome color='#6D6D6D' size='2rem'/>
                            <h4>Personal Settings</h4>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <FaHome color='#6D6D6D' size='2rem'/>
                            <h4>Budget Settings</h4>
                        </div>
                        <div className='dashboard-left-options-unit'>
                            <FaHome color='#6D6D6D' size='2rem'/>
                            <h4>Goals</h4>
                        </div>
                    </div>
                    <div className='dashboard-left-vector'>
                        <img src={dashboardLeftVector} alt="dashboard vector"/>
                        <button className='btn btn-four'>Change Account</button>
                    </div>
                </div>
                <div className='dashboard-body'>
                    <div className='dashboard-body-top'>
                        <div>
                            <h2>Hi Saba!</h2>
                            <h3>Welcome Back, Nice To See You Again.</h3>
                        </div>
                        <img src={dashboardBodyTop} alt="dashboard body"/>
                    </div>
                    <div className='dashboard-body-main'>
                        <h1>Overview</h1>
                        <div className='dashboard-body-main-body'>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='dashboard-right'>
                    <button className='btn btn-four'>+ New Transaction</button>
                    <img src={barchart} alt="bar chart"/>
                    <div className='dashboard-right-activities'>
                        <h3>Recent activities</h3>
                        <div className='dashboard-right-activities-1'></div>
                        <div className='dashboard-right-activities-2'></div>
                        <div className='dashboard-right-activities-3'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashoard