import React from 'react'
import './budget-add-tool.scss'
import InputUnit from '../../../components/input-unit/input-unit'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'
import Spinner from '../../../components/spinner/spinner'

class BudgetAddTool extends React.Component{
    state = {
        validationMessage:null,
        dispatchMessage:null,
        transactionInfo:{amount:'',title:'', date:'',type:'spending',person:'',category:'-select-', note:'not defined'},
        modalOpen: false
    }
    
    resetHandler(){
        const initialState = {amount:'',title:'',date:'',type:'spending',person:'',category:'-select-',note:'not defined'}
        this.setState({transactionInfo:initialState,validationMessage:''})
    }

    addHandler(event){
        event.preventDefault()
        let validationMessage = null
        const initialState = {amount:'',title:'',date:'',type:'spending',person:'',category:'-select-',note:'not defined'}
        if(this.state.transactionInfo.amount.trim() === '' || this.state.transactionInfo.title.trim() === '' || this.state.transactionInfo.date.trim() === '' || this.state.transactionInfo.person.trim() === '' || this.state.transactionInfo.category.trim() === '-select-'){
            validationMessage= 'please enter valid inputs'
            this.setState({validationMessage:validationMessage})
        } else {this.props.onAddTransactionClicked({...this.state.transactionInfo,userId:this.props.id},this.props.token); 
            validationMessage= null
            this.setState({transactionInfo:initialState,validationMessage:validationMessage})}
    }

    closeModal= ()=> {
        this.setState({modalOpen:false})
    }
    
    openModal= ()=> {
        this.setState({modalOpen:true})
    }
    
    render(){
        const currentDate=(new Date().getFullYear()+'-'+('0'+(new Date().getMonth()+1)).slice(-2)+'-'+('0'+new Date().getDate()).slice(-2)).toString()
        let form = null
        if(this.props.loading){form=<Spinner/>}
        if(!this.props.loading){form =
            <form className='budget-add-body'>
                <InputUnit inputtype='input' id='spending-amount-input' placeholder='i.e 100' type="number" labelname='Amount' onChange={event=>this.setState({ transactionInfo: { ...this.state.transactionInfo, amount:event.target.value}})}/>
                <InputUnit inputtype='input' type="text" id='spending-amount-title' placeholder='i.e internet bill' labelname='Title' onChange={event=>this.setState({ transactionInfo: { ...this.state.transactionInfo, title:event.target.value}})}/>
                <InputUnit inputtype='input' type="date" id="datemin" name="datemin" min="2000-01-02" max={currentDate} labelname='Date' onChange={event=>this.setState({ transactionInfo: { ...this.state.transactionInfo, date:event.target.value}})}/>
                <InputUnit inputtype='select' id="transaction-type" labelname='Type' options='spending,earning' onChange={event=>this.setState({ transactionInfo: { ...this.state.transactionInfo, type:event.target.value}})}/>
                <InputUnit inputtype='input' type="text" id='spending-writer-input' placeholder='i.e John' labelname='By' onChange={event=>this.setState({ transactionInfo: { ...this.state.transactionInfo, person:event.target.value}})}/>
                <InputUnit inputtype='select' id="transaction-category" name="categories" labelname='Category' options={`-select-,${this.props.budgetInfo.categories?Object.keys(this.props.budgetInfo.categories).join():null},none of above`} onChange={event=>this.setState({ transactionInfo: { ...this.state.transactionInfo, category:event.target.value}})}/>
                <InputUnit inputtype='textArea' type="textarea" rows="1" cols='50' id='spending-note' placeholder='i.e note: Paid for the next 6 months' labelname='Note(optional)' onChange={event=>this.setState({ transactionInfo: { ...this.state.transactionInfo, note:event.target.value}})}/>
                <div className='budget-input-btn'>
                    <input type="submit" id='spending-input-submit' value='Add' className='btn btn-primary budget-add-submit' onClick={this.addHandler.bind(this)}/>
                    <input type="reset" value='Reset' className='btn btn-four budget-add-submit' onClick={this.resetHandler.bind(this)}/>
                </div>
            </form>
        }
        return(
            <div style={{display:'flex'}}>
                <button onClick={this.openModal} className='btn btn-four modal-btn'>+ New Transaction</button>
                <div className="modal">
                    <dialog style={!this.state.modalOpen?{display:'none'}:{display:'block'}} className="modal__content">
                        <button className="modal__close" onClick={this.closeModal}>&times;</button>
                        <div className='budget-add-section'>
                            <h2>Add a New Transaction</h2>
                            <h3>{this.state.validationMessage}</h3>
                            <h3>{this.state.validationMessage===null?this.props.errorMessage:null}</h3>
                            <h4>{this.state.validationMessage===null?this.props.successMessage:null}</h4>
                            {form}
                        </div>
                    </dialog>
                    <div className="modal__overlay" style={!this.state.modalOpen?{display:'none'}:{display:'block'}} onClick={this.closeModal}></div>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        token : state.auth.token,
        id :state.auth.userId,
        loading: state.list.loading,
        errorMessage:state.list.errorMessage,
        successMessage: state.list.successMessage,
        budgetInfo:state.budgetCal.budgetInfo
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onAddTransactionClicked: (transactionInfo,token) => dispatch(actions.addTransaction(transactionInfo,token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BudgetAddTool)