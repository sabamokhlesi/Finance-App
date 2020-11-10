import React from 'react'
import { FaRegChartBar,FaProjectDiagram,FaChartPie,FaChartLine,FaChartArea,FaCalculator,FaClipboardList,FaCocktail} from "react-icons/fa";
import './budget-summary.scss'
import {connect} from 'react-redux'
// import * as actions from '../../../store/actions/index'

class BudgetSummary extends React.Component{

    render(){

        const totalSpendingcalculator = (list,key,value) =>{
            const spendingAmountList=[]
            for (let transaction in list){
                if(list[transaction][key] === value){    
                    spendingAmountList.push(+list[transaction].amount)
                }
            }
            return spendingAmountList.reduce((total, amount) => total + amount,0)
        }

        return(
            <div className='budget-summary'>
                <div className='budget-summary-total'>
                <h2>Budget Summary</h2>
                    <div className='budget-summary-total-body'>
                        <div className='budget-summary-total-monthly'>
                            <FaRegChartBar color='#F277A4' size='4.5rem'/>
                            <h4 className='budget-summary-total-monthly-title'>Total Budget</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>${this.props.budgetSettingsInfo.totalBudget}</h1>
                                    <h5> (+20%)</h5>
                            </div>
                        </div>
                        <div className='budget-summary-total-monthly'>
                            <FaProjectDiagram color='#FFCD52' size='4.5rem'/>
                            <h4 className='budget-summary-total-monthly-title'>Total Spending</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>${totalSpendingcalculator(this.props.transactionsList,'type','spending')}</h1>
                                    <h5 className='color-red'> (+10%)</h5>
                            </div>
                        </div>
                        <div className='budget-summary-total-monthly'>
                            <FaChartPie color='#F277A4' size='4.5rem'/>
                            <h4 className='budget-summary-total-monthly-title'>Total Remaining</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>${this.props.budgetSettingsInfo.totalBudget-totalSpendingcalculator(this.props.transactionsList,'type','spending')}</h1>
                                    <h5 className='color-green'> (+70%)</h5>
                            </div>
                        </div>
                        <div className='budget-summary-total-monthly'>
                            <FaChartLine color='#6B5AFB' size='4.5rem'/>
                            <h4 className='budget-summary-total-monthly-title'>Total Saving</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>${this.props.budgetSettingsInfo.totalEarning-this.props.budgetSettingsInfo.totalBudget}</h1>
                                    <h5 className='color-green'> (+15%)</h5>
                            </div>
                        </div>
                    </div>
                    <div className='budget-summary-total-spending'></div>
                    <div className='budget-summary-total-remaining'></div>
                    <div className='budget-summary-total-saving'></div>
                </div>
                <div className='budget-summary-total'>
                <h2>Spendings Overview</h2>
                    <div className='budget-summary-total-body'>
                        <div className='budget-summary-total-monthly'>
                            <FaChartArea color='#FFCD52' size='4.5rem'/>
                            <h4 className='budget-summary-total-monthly-title'>Groceries</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>${totalSpendingcalculator(this.props.transactionsList,'category','groceries')}</h1>
                                    <h5 className='color-red'> (+10%)</h5>
                            </div>
                        </div>
                        <div className='budget-summary-total-monthly'>
                            <FaClipboardList color='#F277A4' size='4.5rem'/>
                            <h4 className='budget-summary-total-monthly-title'>Bills And Rent</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>${totalSpendingcalculator(this.props.transactionsList,'category','bills')}</h1>
                                    <h5> (0%)</h5>
                            </div>
                        </div>
                        <div className='budget-summary-total-monthly'>
                            <FaCocktail color='#6B5AFB' size='4.5rem'/>
                            <h4 className='budget-summary-total-monthly-title'>Entertainment</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>${totalSpendingcalculator(this.props.transactionsList,'category','entertainment')}</h1>
                                    <h5 className='color-green'> (-35%)</h5>
                            </div>
                        </div>
                        <div className='budget-summary-total-monthly'>
                            <FaCalculator color='#FFCD52' size='4.5rem'/>
                            <h4 className='budget-summary-total-monthly-title'>Other expenses</h4>
                            <div className='budget-summary-total-monthly-body'>
                                    <h1>${totalSpendingcalculator(this.props.transactionsList,'type','spending')-totalSpendingcalculator(this.props.transactionsList,'category','Entertainment')-totalSpendingcalculator(this.props.transactionsList,'category','Bills')-totalSpendingcalculator(this.props.transactionsList,'category','Groceries')}</h1>
                                    <h5 className='color-red'> (+25%)</h5>
                            </div>
                        </div>
                    </div>
                    <div className='budget-summary-total-spending'></div>
                    <div className='budget-summary-total-remaining'></div>
                    <div className='budget-summary-total-saving'></div>
                </div>
                <div className='budget-spending-overview'>
                    <div className='budget-spending-groceries'></div>
                    <div className='budget-spending-bills-and-rent'></div>
                    <div className='budget-spending-entertainment'></div>
                    <div className='budget-spending-others'></div>
                </div> 
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        token : state.auth.token,
        userId :state.auth.userId,
        budgetSettingsInfo:state.budgetCal.budgetInfo,
        transactionsList:state.list.transactionsList.currentMonth,
        list:state.list
    }
}


export default connect(mapStateToProps)(BudgetSummary)