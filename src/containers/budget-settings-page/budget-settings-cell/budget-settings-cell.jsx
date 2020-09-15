import React from 'react'
import './budget-settings-cell.scss'
import { FaRegCreditCard,FaPencilAlt,FaChartLine} from "react-icons/fa";

const budgetSettingsCell = (props) =>{
    return(
        <div className='budget-dashboard-category'>
        <div className='budget-dashboard-category-container'>
            <div className='budget-dashboard-category-inside'>
                <h4>{props.title}</h4>
            </div>
            <div className='budget-dashboard-category-inside'>
                <FaRegCreditCard color='#64a1a2' size='4.5rem' className='budget-dashboard-category-inside-icon'/>
                <h1>{props.amount}</h1>
            </div>
            <div className='budget-dashboard-category-inside'>
                <FaChartLine color='#e9884b' size='2.5rem' className='budget-dashboard-category-inside-icon'/>
                <p>({props.percent})</p>
            </div>
        </div>
        <FaPencilAlt color='#a9c6c7' size='1.5rem' className='budget-dashboard-category-edit-icon'/>
    </div>
    )
}

export default budgetSettingsCell