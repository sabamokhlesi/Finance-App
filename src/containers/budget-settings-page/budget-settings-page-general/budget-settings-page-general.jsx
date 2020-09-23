import React from 'react'
import InputUnit from '../../../components/input-unit/input-unit'
import './budget-settings-page-general.scss'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'
import BudgetSettingsCell from '../budget-settings-cell/budget-settings-cell'
import {FaTimes} from 'react-icons/fa'
import Spinner from '../../../components/spinner/spinner'
import BudgetSettingsGeneralCell from './budget-settings-page-general-cell/budget-settings-page-general-cell'
class BudgetSettingsGeneral extends React.Component{
    state={
        budgetSettingsInfo:{
            categories:{
                groceries: null
            },
            savingGoal:null,
            totalBudget:null,
            totalEarning:null
        },
        changing: false
    }
    componentDidMount(){
        this.props.onFetchBudgetInfo(this.props.token,this.props.userId)
        this.props.onFetchTransactions(this.props.token,this.props.userId)
    }

   
    deleteHandler(item){
        const updatedState = {...this.state.budgetSettingsInfo}
        delete updatedState.categories[item]
        this.setState({budgetSettingsInfo:updatedState})
    }

    addCategoryHandler(){
        const newCategory = this.addnewInput.value.trim()
        const newState = {...this.state.budgetSettingsInfo}
        newState.categories[newCategory]=null
        this.setState({ budgetSettingsInfo: newState})
        this.addnewInput.value=''
    }

    onChangeHandler(event,category){
        const newValue= event.target.value
        const newState={...this.state.budgetSettingsInfo}
        newState.categories[category] = newValue
        this.setState({ budgetSettingsInfo: newState})
    }
    
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
        
        let remainingDaysOfMonth = 0
        const date = new Date();
        const time = new Date(date.getTime());
        time.setMonth(date.getMonth() + 1);
        time.setDate(0);
        remainingDaysOfMonth= time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;

        const inputs = Object.keys(this.props.budgetInfo.categories).map(category=>
            <div className='budget-input-set-unit' key={category+'-budget-set-input-unit'}>
                <FaTimes color='#a9c6c7' size='1.5rem' onClick={()=>this.deleteHandler(category)} className='budget-input-set-unit-icon'/>
                <InputUnit inputtype='input' id={category+'-budget-set-input'} placeholder='i.e 200' type="number" labelname={category} onChange={event=>this.onChangeHandler(event,category)} defaultValue={this.props.budgetInfo.categories[category]}/>
            </div>)

        let body =null
        if(this.props.loading){body=<Spinner/>}
        if(this.state.changing){
            body=
            <div className='budget-dashboard-body'>
                <h2>General Settings</h2>
                <div className='budget-dashboard-body-inside'>
                    <div className='budget-dashboard-general-categories'>
                        <h2>Set Budget for each category</h2>
                        <div className='budget-add-input-unit'>
                            <h4>Add a new category</h4>
                            <input id='budget-add-input' key='budget-add-input' placeholder='i.e rent' type="text" ref={input=>{this.addnewInput = input}}/>
                            <br/><button className='btn btn-primary' onClick={this.addCategoryHandler.bind(this)}>Add</button>
                        </div>
                        {inputs}
                    </div>
                    <div className='budget-dashboard-general-settings-right'>
                        <BudgetSettingsGeneralCell icontype='moneybill' iconsize='5rem' iconolor='#32606d' subject='How much is your income this month?' inputplaceholder='i.e rent' inputtype='text' inputonchange={(event)=>this.setState({budgetSettingsInfo:{...this.state.budgetSettingsInfo,totalEarning:event.target.value}})} defaultvalue={this.props.budgetInfo.totalEarning}/>
                        <BudgetSettingsGeneralCell icontype='creditcard' iconsize='5rem' iconolor='#32606d' subject='Set your total monthly budget' inputplaceholder='i.e 2000' inputtype='number' inputonchange={(event)=>this.setState({budgetSettingsInfo:{...this.state.budgetSettingsInfo,totalBudget:event.target.value}})} defaultvalue={this.props.budgetInfo.totalBudget}/>
                        <BudgetSettingsGeneralCell icontype='chart' iconsize='5rem' iconolor='#32606d' subject='How much are you planning to save this month?' inputplaceholder='i.e 1000' inputtype='number' inputonchange={(event)=>this.setState({budgetSettingsInfo:{...this.state.budgetSettingsInfo,savingGoal:event.target.value}})} defaultvalue={this.props.budgetInfo.savingGoal}/>
                    </div>
                </div>
                <button className='btn btn-primary budget-save-changes-btn' onClick={()=>{this.props.onSaveChangesHandler(this.state.budgetSettingsInfo,this.props.token,this.props.userId);this.setState({changing: false})}}>Save Changes</button>
                <div/>
            </div>
        } else { body = 
            <div className='budget-dashboard-body'>
                <h2>Your Monthly Budget goals</h2>
                <div className='budget-dashboard-body-inside'>
                    <div className='budget-dashboard-body-left'>
                        {Object.keys(this.props.budgetInfo.categories).map(category=>< BudgetSettingsCell title={category} key={category} usedpercent={(totalSpendingcalculator(this.props.transactionsList,'category',category)/this.props.budgetInfo.categories[category]*100).toFixed(1)} usedamount={totalSpendingcalculator(this.props.transactionsList,'category',category)} amountIsNumber amount={this.props.budgetInfo.categories[category]}/>)}
                    </div>
                    <div className='budget-dashboard-body-right'>
                        < BudgetSettingsCell title='Total monthly budget' amount={this.props.budgetInfo.totalBudget} usedpercent={(totalSpendingcalculator(this.props.transactionsList,'type','spending')/this.props.budgetInfo.totalBudget*100).toFixed(1)} usedamount={totalSpendingcalculator(this.props.transactionsList,'type','spending')} amountIsNumber/>
                        < BudgetSettingsCell title='Total monthly earning' amount={'$'+totalSpendingcalculator(this.props.transactionsList,'type','earning')}/>
                        < BudgetSettingsCell title='Monthly saving goal' amount={'$'+this.props.budgetInfo.savingGoal}/>
                        < BudgetSettingsCell title='Remaining days of this month' amount={remainingDaysOfMonth}/>
                    </div>
                </div>
                <button className='btn btn-primary budget-save-changes-btn' onClick={()=>this.setState({budgetSettingsInfo:this.props.budgetInfo,changing:true})}>Click here to modify your settings</button>
            </div>}
        return(
                <div>
                    {body}
                </div>
        )
    }
    
}
const mapStateToProps = state =>{
    return{
        token : state.auth.token,
        userId :state.auth.userId,
        loading:state.budgetCal.loading,
        budgetInfo:state.budgetCal.budgetInfo,
        transactionsList:state.list.transactionsList,
        list:state.list
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onFetchTransactions:(token,userId)=>{dispatch(actions.fetchTransactions(token,userId))},
        onFetchBudgetInfo:(token,userId)=>{dispatch(actions.fetchBudgetInfo(token,userId))},
        onSaveChangesHandler:(newInfo,token,userId)=>{dispatch(actions.saveChangedSettingsInfo(newInfo,token,userId))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BudgetSettingsGeneral)