import React from 'react'
import './budget-settings-cell.scss'

const budgetSettingsCell = (props) =>{
    return(
        <div className='budget-dashboard-category'>
        <div className='budget-dashboard-category-container'>
                <h4>{props.title}</h4>
                <h2>{props.amountIsNumber?<span>$</span>:''}{props.amount}</h2>
                <p className={+props.usedamount >= props.amount? 'color-red':'color-green'}>{props.amountIsNumber?<span>$</span>:''}{props.usedamount}{props.amountIsNumber?<span>({props.usedpercent}%) used</span>:''}</p>
        </div>
    </div>
    )
}

export default budgetSettingsCell