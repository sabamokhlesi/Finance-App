import React from 'react'
import './dashboard-main.scss'
import dashboardBodyTop from '../../../images/headerImg1.png'
import {connect} from 'react-redux'
// import chart2 from '../../../images/chart2.png'

class DashboardMainOverView extends React.Component{
    
    totalBudgetCal = (budgetList) =>{
        const list=[]
        for (let item in budgetList){
            list.push(+budgetList[item])
        }
        return list.reduce((total, amount) => total + amount,0)
    }

    totalSpendingcalculator = (list,key,value) =>{
        const spendingAmountList=[]
        for (let transaction in list){
            if(list[transaction][key] === value){    
                spendingAmountList.push(+list[transaction].amount)
            }
        }
        return spendingAmountList.reduce((total, amount) => total + amount,0)
    }
    render(){
        return(
            <div className='dashboard-body'>
                <div className='dashboard-body-top'>
                    <div>
                        <h2>Hi {this.props.budgetSettingsInfo.firstName}!</h2>
                        <h3>Welcome Back, Nice To See You Again.</h3>
                    </div>
                    <img src={dashboardBodyTop} alt="dashboard body"/>
                </div>
                <div className='dashboard-body-main'>
                    <h1>Overview</h1>
                    <div className='dashboard-body-main-body'>
                    <div className='dashboard-summary-total-body'>
                        <div className='dashboard-summary-total-monthly'>
                            <h4 className='dashboard-summary-total-monthly-title'>Total Budget</h4>
                            <div className='dashboard-summary-total-monthly-body'>
                                <h1>${this.totalBudgetCal(this.props.budgetSettingsInfo.categories)}</h1>
                                <h5>({(this.totalSpendingcalculator(this.props.transactionsList,'type','spending')/this.totalBudgetCal(this.props.budgetSettingsInfo.categories)*100).toFixed()}%)used</h5>
                            </div>
                            </div>
                            <div className='dashboard-summary-total-monthly'>
                                <h4 className='dashboard-summary-total-monthly-title'>Total Spending</h4>
                                <div className='dashboard-summary-total-monthly-body'>
                                    <h1>${this.totalSpendingcalculator(this.props.transactionsList,'type','spending')}</h1>
                                    {/* <h5 className='color-red'> (+10%)</h5> */}
                                </div>
                            </div>
                            <div className='dashboard-summary-total-monthly'>
                                <h4 className='dashboard-summary-total-monthly-title'>Total Remaining</h4>
                                <div className='dashboard-summary-total-monthly-body'>
                                    <h1>${+this.totalBudgetCal(this.props.budgetSettingsInfo.categories)-this.totalSpendingcalculator(this.props.transactionsList,'type','spending')}</h1>
                                    {/* <h5 className='color-green'> (+70%)</h5> */}
                                </div>
                            </div>
                            <div className='dashboard-summary-total-monthly'>
                                <h4 className='dashboard-summary-total-monthly-title'>Total Saving</h4>
                                <div className='dashboard-summary-total-monthly-body'>
                                    <h1>${this.totalSpendingcalculator(this.props.transactionsList,'type','earning')-this.totalBudgetCal(this.props.budgetSettingsInfo.categories)}</h1>
                                    {/* <h5 className='color-green'> (+15%)</h5> */}
                                </div>
                            </div>
                            <div className='dashboard-summary-total-monthly'>
                                <h4 className='dashboard-summary-total-monthly-title'>Total earning</h4>
                                <div className='dashboard-summary-total-monthly-body'>
                                        <h1>${this.totalSpendingcalculator(this.props.transactionsList,'type','earning')}</h1>
                                        {/* <h5 className='color-green'> (+35%)</h5> */}
                                </div>
                            </div>
                        </div>
                        {/* <img src={chart2} alt="chart"/> */}
                        <p className="dashboard-main-bottom-bars-title"><span style={{color:'#6266EA'}}></span> Used Budget for each category</p>
                        <div className="dashboard-main-bottom">
                            <div className="dashboard-main-bottom-bars">
                                {Object.keys(this.props.budgetSettingsInfo.categories).map(category=>
                                    <div className='dashboard-main-bottom-bar'>
                                        <span style={{
                                            backgroundColor:this.totalSpendingcalculator(this.props.transactionsList,'category',category)/this.props.budgetSettingsInfo.categories[category]>=0.9?'#F27BA7':'#6266EA',
                                            height:(this.totalSpendingcalculator(this.props.transactionsList,'category',category)/this.props.budgetSettingsInfo.categories[category]*100).toFixed(1)+'%'}}><h5>{(this.totalSpendingcalculator(this.props.transactionsList,'category',category)/this.props.budgetSettingsInfo.categories[category]*100).toFixed(1)+'%'}</h5></span>
                                        <p>{category}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
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
export default connect(mapStateToProps)(DashboardMainOverView)