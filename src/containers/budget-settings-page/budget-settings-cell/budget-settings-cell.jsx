import React from 'react'
import './budget-settings-cell.scss'

const budgetSettingsCell = (props) =>{
    return(
        <div className='budget-dashboard-category'>
        <div className='budget-dashboard-category-container'>
                <h4>{props.title}</h4>
                <h1>{props.amount}</h1>
        </div>
    </div>
    )
}

export default budgetSettingsCell