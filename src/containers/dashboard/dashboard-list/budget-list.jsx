import React from 'react'
import './budget-list.scss'
import InputUnit from '../../../components/input-unit/input-unit'
import BudgetListItem from './budget-list-item/budget-list-item'
import * as actions from '../../../store/actions/index'
import {connect} from 'react-redux'

class BudgetList extends React.Component{
    state={
        sortType:'Newest',
        searchFor:null,
        showMonth:'Current Month',
        infoModalOpen:false,
        modalTransactionInfo: null
    }
    sortHandler(){
        if(this.state.sortType ==='High to low'){return (a, b) => {return b.amount - a.amount}}
        if(this.state.sortType ==="Low to high"){return (a, b) => {return a.amount - b.amount}}
        if(this.state.sortType ==='Newest'){return((a, b) => {const dateA = new Date(a.date); const dateB = new Date(b.date); return dateB - dateA;})}     
        if(this.state.sortType ==="Oldest"){return((a, b) => {const dateA = new Date(a.date);const dateB = new Date(b.date);return dateA - dateB;})}
    }

    searchHandler = item => {
        if(!this.state.searchFor){return item}
        else{
            return(
                item.title.toLowerCase().includes(this.state.searchFor.trim().toLowerCase())
                || item.amount.toLowerCase().includes(this.state.searchFor.trim().toLowerCase())
                || item.date.toLowerCase().includes(this.state.searchFor.trim().toLowerCase())
                || item.person.toLowerCase().includes(this.state.searchFor.trim().toLowerCase())
                || item.type.toLowerCase().includes(this.state.searchFor.trim().toLowerCase())
                || item.category.toLowerCase().includes(this.state.searchFor.trim().toLowerCase())
                || item.note.toLowerCase().includes(this.state.searchFor.trim().toLowerCase())
            )} 
    }

    infoHandler(transactionId){
        const transaction = this.props.transactionsList.find(item=>item._id === transactionId)
        this.setState({modalTransactionInfo:transaction,infoModalOpen:true})
       
    }

    render(){
        return(
            <div className='budget-list-section'>
                <div className='budget-list-top'>
                    <InputUnit style={{fontSize:'1.4rem'}} inputtype='select' id="budget-list-sorting" name="SortBy" labelname='Sort by' options='Newest,Oldest,High to low,Low to high' onChange={event=>this.setState({sortType:event.target.value})}/>
                    <InputUnit style={{fontSize:'1.4rem'}} inputtype='select' id="budget-list-month" name="showMonth" labelname='Month' options='Current Month,Last Month,Last 3 Months,Last 6 Months,2020,2019,2018' onChange={event=>this.setState({showMonth:event.target.value})} />
                    <InputUnit style={{fontSize:'1.4rem'}} inputtype='input' type="search" id="budget-list-search" placeholder='i.e grocery' labelname='Search' onChange={event=>this.setState({searchFor:event.target.value})}/>
                </div>
                <div className='budget-list-body'>
                    <div className='budget-list-item'>
                        <div className='budget-list-item-date'>Date</div>
                        <div className='budget-list-item-amount'>Amount</div>
                        <div className='budget-list-item-title'>For</div>
                        <div className='budget-list-item-by'>Added by</div>
                        <div className='budget-list-item-edit'>Edit</div>
                    </div>
                    {this.props.transactionsList.length>=1?this.props.transactionsList.filter(this.searchHandler).sort(this.sortHandler().bind(this)).map(transaction=>{
                        return(<BudgetListItem 
                            key={transaction._id} 
                            date={transaction.date} 
                            amount={transaction.amount} 
                            title={transaction.title} 
                            person={transaction.person}
                            onDeleteClicked={()=>this.props.onDeleteHandler(transaction._id,this.props.token)}
                            onInfoClicked={()=>this.infoHandler(transaction._id)}/>)
                    }):'start adding transactions'}
                </div>
                {this.state.modalTransactionInfo?
                <div className="modal">
                    <dialog style={!this.state.infoModalOpen?{display:'none'}:{display:'block',width:'max-content'}} className="modal__content">
                        <button className="modal__close" onClick={()=>this.setState({infoModalOpen:false,modalTransactionInfo:null})}>&times;</button>
                        <div className='modal-info'>
                            <h4>Title: <span>{this.state.modalTransactionInfo.title}</span></h4>
                            <h4>Amount: <span>{this.state.modalTransactionInfo.amount}</span></h4>
                            <h4>By: <span>{this.state.modalTransactionInfo.person}</span></h4>
                            <h4>Date: <span>{this.state.modalTransactionInfo.date}</span></h4>
                            <h4>Category: <span>{this.state.modalTransactionInfo.category}</span></h4>
                            <h4>Type: <span>{this.state.modalTransactionInfo.type}</span></h4>
                            <h4>Note: <span>{this.state.modalTransactionInfo.note}</span></h4>
                        </div>
                    </dialog>
                    <div className="modal__overlay" style={!this.state.infoModalOpen?{display:'none'}:{display:'block'}} onClick={()=>this.setState({infoModalOpen:false,modalTransactionInfo:null})}></div>
                </div>:null}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        token : state.auth.token,
        userId :state.auth.userId,
        transactionsList: state.list.transactionsList,
        loading:state.list.loading
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onDeleteHandler:(transactionId,token)=>{dispatch(actions.deleteTransaction(transactionId,token))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BudgetList)