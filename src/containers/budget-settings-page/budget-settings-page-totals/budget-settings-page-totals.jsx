import React from 'react'
import BudgetSettingsCell from '../budget-settings-cell/budget-settings-cell'

const budgetSettingsTotals =() =>{
    return(
        <div className='budget-dashboard-body'>
            <h2>Your Monthly Budget goals</h2>
            <div className='budget-dashboard-body-inside'>
                <div className='budget-dashboard-body-left'>
                    < BudgetSettingsCell title='restaurant' amount='$150' percent='40% is used'/>
                    < BudgetSettingsCell title='groceries' amount='$400' percent='20% is used'/>
                    < BudgetSettingsCell title='entertainment' amount='$250' percent='130% is used'/>
                    < BudgetSettingsCell title='clothes' amount='$200' percent='0% is used'/>
                    < BudgetSettingsCell title='bills' amount='$330' percent='100% is used'/>
                    < BudgetSettingsCell title='transportation' amount='$20' percent='75% is used'/>
                </div>
                <div className='budget-dashboard-body-right'>
                    < BudgetSettingsCell title='Total monthly budget' amount='$2800' percent='44% remaining'/>
                    < BudgetSettingsCell title='Total remaining budget' amount='$1640' percent='44%'/>
                    < BudgetSettingsCell title='Monthly saving goal' amount='$3100' percent='30% remaining'/>
                    < BudgetSettingsCell title='Remaining days of this month' amount='17' percent='55% remaining'/>
                </div>
            </div>
        </div>
    )
}

export default budgetSettingsTotals