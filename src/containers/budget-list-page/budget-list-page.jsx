import React from 'react'
import './budget-list-page.scss'
import BudgetSummary from './budget-summary/budget-summary'
import BudgetAddTool from './budget-add-tool/budget-add-tool'
import BudgetList from './budget-list/budget-list'
class BudgetListPage extends React.Component{
    render(){
        return(
            <div className='budget-cal'>
                <div className='budget-main'>
                    <div className='budget-top'><BudgetSummary/> </div>
                    <div className='budget-add-item'> <BudgetAddTool/></div>
                    <div className='budget-list'><BudgetList/></div>
                </div>
            </div>
        )
    }
}

export default BudgetListPage