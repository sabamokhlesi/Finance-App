import React from 'react'
import './dashboard-right.scss'
import AddTool from '../../budget-list-page/budget-add-tool/budget-add-tool'
import barchart from '../../../images/chart.png'

class DashboardRight extends React.Component{
    render(){
        let remainingDaysOfMonth = 0
        const date = new Date();
        const time = new Date(date.getTime());
        time.setMonth(date.getMonth() + 1);
        time.setDate(0);
        remainingDaysOfMonth= time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
        return(
            <div className='dashboard-right'>
                <AddTool/>
                <img src={barchart} alt="bar chart"/>
                <div className='dashboard-right-activities'>
                    <h3>Recent activities</h3>
                    <div className='dashboard-right-activities-1'>{remainingDaysOfMonth} day(s) until next month.</div>
                    <div className='dashboard-right-activities-2'>You exceeded your restaurant budget.</div>
                    <div className='dashboard-right-activities-3'>You have only used 10% of your grocery budget.</div>
                </div>
            </div>
        )
    }
}

export default DashboardRight

