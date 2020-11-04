import React from 'react'
import './dashboard-details.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import dashboardDetailsBottom from '../../../images/settings-bottom.png'

class DashboardBudgetDetails extends React.Component{

    totalSpendingcalculator = (list,key,value) =>{
        const spendingAmountList=[]
        for (let transaction in list){
            if(list[transaction][key] === value){    
                spendingAmountList.push(+list[transaction].amount)
            }
        }
        return spendingAmountList.reduce((total, amount) => total + amount,0)
    }

    totalBudgetCal = (budgetList) =>{
        const list=[]
        for (let item in budgetList){
            list.push(+budgetList[item])
        }
        return list.reduce((total, amount) => total + amount,0)
    }

    render(){
        
        return(
            <div className='dashboard-details'>
                <h2>Your Budget Details</h2>
                <div className='dashboard-details-top'>
                    <div className='dashboard-details-top-unit'>
                        <h3>${this.totalBudgetCal(this.props.budgetSettingsInfo.categories)}</h3>
                        <p>Total Budget</p>
                    </div>
                    <div className='dashboard-details-top-unit'>
                        <h3>${this.totalSpendingcalculator(this.props.transactionsList,'type','earning')}</h3>
                        <p>Total Earnings</p>
                    </div>
                    <div className='dashboard-details-top-unit'>
                        <h3>${this.totalSpendingcalculator(this.props.transactionsList,'type','earning')-this.totalBudgetCal(this.props.budgetSettingsInfo.categories)}</h3>
                        <p>Total Saving</p>
                    </div>
                </div>
                <div className='dashboard-details-main'>
                    <h3>Spendings By Categories</h3>
                    {Object.keys(this.props.budgetSettingsInfo.categories).map(category=>
                    <div className='dashboard-details-main-unit' key={category}>
                        <p>{category}</p>
                        <div className='dashboard-details-main-chart'>
                            <div>{'$'+this.totalSpendingcalculator(this.props.transactionsList,'category',category)+" / $"+this.props.budgetSettingsInfo.categories[category]}</div>
                            <div className='dashboard-details-main-bar'><span style={{width:(this.totalSpendingcalculator(this.props.transactionsList,'category',category)/this.props.budgetSettingsInfo.categories[category]*100).toFixed(1)+'%',maxWidth:'100%',backgroundColor:'#F277A4'}}></span></div>
                        </div>
                    </div>
                    )}
                </div>
                <div className='dashboard-details-bottom'>
                    <Link to='/settings' className='btn btn-primary'>SETTINGS</Link>
                    <img src={dashboardDetailsBottom} alt="dashboard Details"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        // token : state.auth.token,
        // userId :state.auth.userId,
        budgetSettingsInfo:state.budgetCal.budgetInfo,
        transactionsList:state.list.transactionsList,
        list:state.list
    }
}
export default connect(mapStateToProps)(DashboardBudgetDetails)