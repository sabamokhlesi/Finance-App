import React from 'react'
import './dashboard-main.scss'
import dashboardBodyTop from '../../../headerImg1.png'
import chart2 from '../../../chart2.png'

class DashboardMainOverView extends React.Component{
    render(){
        return(
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
                    <div className='budget-summary-total-body'>
                        <div className='budget-summary-total-monthly'>
                            <h4 className='budget-summary-total-monthly-title'>Total Budget</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>$3200</h1>
                                    <h5> (+20%)</h5>
                            </div>
                            </div>
                            <div className='budget-summary-total-monthly'>
                                <h4 className='budget-summary-total-monthly-title'>Total Spending</h4>
                                <div className='budget-summary-total-monthly-body'>
                                        <h1>$1259</h1>
                                        <h5 className='color-red'> (+10%)</h5>
                                </div>
                            </div>
                            <div className='budget-summary-total-monthly'>
                                <h4 className='budget-summary-total-monthly-title'>Total Remaining</h4>
                                <div className='budget-summary-total-monthly-body'>
                                        <h1>$2370</h1>
                                        <h5 className='color-green'> (+70%)</h5>
                                </div>
                            </div>
                            <div className='budget-summary-total-monthly'>
                                <h4 className='budget-summary-total-monthly-title'>Total Saving</h4>
                                <div className='budget-summary-total-monthly-body'>
                                        <h1>$350</h1>
                                        <h5 className='color-green'> (+15%)</h5>
                                </div>
                            </div>
                            <div className='budget-summary-total-monthly'>
                                <h4 className='budget-summary-total-monthly-title'>Total earning</h4>
                                <div className='budget-summary-total-monthly-body'>
                                        <h1>$4600</h1>
                                        <h5 className='color-green'> (+35%)</h5>
                                </div>
                            </div>
                        </div>
                        <img src={chart2} alt="chart"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardMainOverView