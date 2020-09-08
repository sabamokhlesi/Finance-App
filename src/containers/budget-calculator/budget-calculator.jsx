import React from 'react'
import './budget-calculator.scss'
import BudgetSummary from './budget-summary/budget-summary'
import BudgetAddTool from './budget-add-tool/budget-add-tool'
class BudgetCal extends React.Component{
    render(){
        return(
            <div className='budget-cal'>
                <div className='budget-main'>
                    <div className='budget-top'>
                        <BudgetSummary/>
                    </div>
                    <div className='budget-add-item'>
                        <BudgetAddTool/>
                    </div>
                    <div className='budget-list'>
                        <div className='budget-list-top'>
                            <div className='budget-list-top-sortby'></div>
                            <div className='budget-list-top-filter'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BudgetCal