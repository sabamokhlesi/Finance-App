import React from 'react'
import InputUnit from '../../../components/input-unit/input-unit'
import './budget-settings-page-general.scss'
import {FaTimes} from 'react-icons/fa'
class BudgetSettingsGeneral extends React.Component{
    state={
        budgetSettingsInfo:{
            groceries: null,
            bills:null,
            restaurant:null,
            entertainment:null,
            clothes:null,
            transportation:null,
            others:null
        }
    }

    deleteHandler(item){
        const updatedState = {...this.state.budgetSettingsInfo}
        delete updatedState[item]
        this.setState({budgetSettingsInfo:updatedState})
    }
    addCategoryHandler(){
        const newCategory = this.addnewInput.value.trim()
        this.setState({ budgetSettingsInfo: {...this.state.budgetSettingsInfo,[newCategory]:null}})
    }
    render(){
        const categoriesArrey = Object.keys(this.state.budgetSettingsInfo)
    const inputs = categoriesArrey.map(category=>
        <div className='budget-input-set-unit'>
            <FaTimes color='#a9c6c7' size='1.5rem' onClick={()=>this.deleteHandler(category)} className='budget-input-set-unit-icon'/>
            <InputUnit inputtype='input' id={category+'-budget-set-input'} key={category+'-budget-set-input'} placeholder='i.e 200' type="number" labelname={category} onChange={(event)=>this.setState({ budgetSettingsInfo: { ...this.state.budgetSettingsInfo, [category]:event.target.value}})}/>
        </div>)
        return(
            <div className='budget-dashboard-body'>
                <h2>General Settings</h2>
                <div className='budget-dashboard-body-inside'>
                    <div className='budget-dashboard-general-categories'>
                        <h2>Set Budget for each category</h2>
                        {inputs}
                        <button className='btn btn-primary'>Set</button>
                    </div>
                    <div className=''>
                        <input id='budget-add-input' key='budget-add-input' placeholder='i.e rent' type="text" ref={input=>{this.addnewInput = input}}/>
                        <button className='btn btn-primary' onClick={this.addCategoryHandler.bind(this)}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default BudgetSettingsGeneral