import React from 'react'
import './dashboard-settings.scss'
import dashboardDetailsBottom from '../../../images/settings-bottom.png'

class DashboardBudgetDetails extends React.Component{
    render(){
        return(
            <div className='dashboard-details'>
                <h2>Your Budget Details</h2>
                <div className='dashboard-details-top'>
                    <div className='dashboard-details-top-unit'>
                        <h3>$2200</h3>
                        <p>Total Budget</p>
                    </div>
                    <div className='dashboard-details-top-unit'>
                        <h3>$6700</h3>
                        <p>Total Income</p>
                    </div>
                    <div className='dashboard-details-top-unit'>
                        <h3>$4500</h3>
                        <p>Saving Goal</p>
                    </div>
                </div>
                <div className='dashboard-details-main'>
                    <h3>Spendings By Categories</h3>
                    <div className='dashboard-details-main-unit'>
                        <p>Geroceries</p>
                        <div className='dashboard-details-main-chart'>
                            <div>$75/$350</div>
                            <div className='dashboard-details-main-bar'><span style={{width:'30%',backgroundColor:'#8276F2'}}></span></div>
                        </div>
                    </div>
                    <div className='dashboard-details-main-unit'>
                        <p>Bill</p>
                        <div className='dashboard-details-main-chart'>
                            <div>$63/$78</div>
                            <div className='dashboard-details-main-bar'><span style={{width:'70%',backgroundColor:'#FFC73B'}}></span></div>
                        </div>
                    </div>
                    <div className='dashboard-details-main-unit'>
                        <p>Restaurant</p>
                        <div className='dashboard-details-main-chart'>
                            <div>$34/$150</div>
                            <div className='dashboard-details-main-bar'><span style={{width:'20%',backgroundColor:'#8276F2'}}></span></div>
                        </div>
                    </div>
                    <div className='dashboard-details-main-unit'>
                        <p>Transportation</p>
                        <div className='dashboard-details-main-chart'>
                            <div>$50/$100</div>
                            <div className='dashboard-details-main-bar'><span style={{width:'50%',backgroundColor:'#FFC73B'}}></span></div>
                        </div>
                    </div>
                    <div className='dashboard-details-main-unit'>
                        <p>Entertainment</p>
                        <div className='dashboard-details-main-chart'>
                            <div>$89/$100</div>
                            <div className='dashboard-details-main-bar'><span style={{width:'90%',backgroundColor:'#E83DB0'}}></span></div>
                        </div>
                    </div>
                    <div className='dashboard-details-main-unit'>
                        <p>Bill</p>
                        <div className='dashboard-details-main-chart'>
                            <div>$63/$78</div>
                            <div className='dashboard-details-main-bar'><span style={{width:'70%',backgroundColor:'#FFC73B'}}></span></div>
                        </div>
                    </div>
                    <div className='dashboard-details-main-unit'>
                        <p>Restaurant</p>
                        <div className='dashboard-details-main-chart'>
                            <div>$34/$150</div>
                            <div className='dashboard-details-main-bar'><span style={{width:'20%',backgroundColor:'#8276F2'}}></span></div>
                        </div>
                    </div>
                    <div className='dashboard-details-main-unit'>
                        <p>Transportation</p>
                        <div className='dashboard-details-main-chart'>
                            <div>$50/$100</div>
                            <div className='dashboard-details-main-bar'><span style={{width:'50%',backgroundColor:'#FFC73B'}}></span></div>
                        </div>
                    </div>
                </div>
                <div className='dashboard-details-bottom'>
                    <button className='btn btn-primary'>EDIT</button>
                    <img src={dashboardDetailsBottom} alt="dashboard Details"/>
                </div>
            </div>
        )
    }
}

export default DashboardBudgetDetails