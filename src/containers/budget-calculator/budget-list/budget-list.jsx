import React from 'react'
import './budget-list.scss'
import InputUnit from '../../../components/input-unit/input-unit'
import BudgetListItem from './budget-list-item/budget-list-item'
import * as actions from '../../../store/actions/index'
import {connect} from 'react-redux'
class BudgetList extends React.Component{
    componentDidMount(){
        this.props.onFetchTransactions(this.props.token,this.props.userId)
    }
    render(){
        return(
            <div className='budget-list-section'>
                <div className='budget-list-top'>
                    <InputUnit inputtype='select' id="budget-list-sorting" name="SortBy" labelname='Sort by' options='Newest,High to low,Low to high,Oldest,Spendings first,Earnings first'/>
                    <InputUnit inputtype='input' type="search" id="budget-list-search" placeholder='i.e grocery' labelname='Search'/>
                </div>
                <div className='budget-list-body'>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>Date</div>
                        <div className='budget-list-item-amount'>Amount</div>
                        <div className='budget-list-item-title'>For</div>
                        <div className='budget-list-item-by'>Added by</div>
                        <div className='budget-list-item-edit'>Edit</div>
                    </div>
                    {this.props.transactionList.map(transaction=>{
                        return(<BudgetListItem date={transaction.date} amount={transaction.amount} title={transaction.title} person={transaction.person}/>)
                    })}
                    <BudgetListItem date='13/03/2020' amount='-$78' title='Bill' person='Reza'/>
                    <BudgetListItem date='12/08/2020' amount='-$10' title='Grocery' person='Reza'/>
                    <BudgetListItem date='29/05/2020' amount='+$2000' title='Salary' person='Saba'/>
                    <BudgetListItem date='09/08/2020' amount='-$15' title='Clothes' person='Saba'/>
                    <BudgetListItem date='13/03/2020' amount='-$78' title='Bill' person='Reza'/>
                    <BudgetListItem date='12/08/2020' amount='-$10' title='Grocery' person='Reza'/>
                    <BudgetListItem date='29/05/2020' amount='+$2000' title='Salary' person='Saba'/>
                    <BudgetListItem date='09/08/2020' amount='-$15' title='Clothes' person='Saba'/>
                    <BudgetListItem date='13/03/2020' amount='-$78' title='Bill' person='Reza'/>
                    <BudgetListItem date='12/08/2020' amount='-$10' title='Grocery' person='Reza'/>
                    <BudgetListItem date='29/05/2020' amount='+$2000' title='Salary' person='Saba'/>
                    <BudgetListItem date='09/08/2020' amount='-$15' title='Clothes' person='Saba'/>
                    <BudgetListItem date='13/03/2020' amount='-$78' title='Bill' person='Reza'/>
                    <BudgetListItem date='12/08/2020' amount='-$10' title='Grocery' person='Reza'/>
                    <BudgetListItem date='29/05/2020' amount='+$2000' title='Salary' person='Saba'/>
                    <BudgetListItem date='09/08/2020' amount='-$15' title='Clothes' person='Saba'/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        token : state.auth.token,
        userId:state.auth.userId,
        transactionList: state.budgetCal.transactionList
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onFetchTransactions:(token,userId)=>{dispatch(actions.fetchTransactions(token,userId))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BudgetList)