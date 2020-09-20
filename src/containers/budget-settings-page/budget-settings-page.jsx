import React from 'react'
import './budget-settings-page.scss'
import {FaCog} from "react-icons/fa"
import BudgetSettingsTotals from './budget-settings-page-totals/budget-settings-page-totals'
import BudgetSettingsGeneral from'./budget-settings-page-general/budget-settings-page-general'
import BudgetSettingsGoals from './budget-settings-page-goals/budget-settings-page-goals'
import BudgetSettingsCurrentStatus from './budget-settings-page-current-status/budget-settings-page-current-status'

class BudgetSettingsPage extends React.Component{
    state={
        settingPage:<BudgetSettingsGeneral/>,
        monthlyBudgetLinkClass:'budget-dashboard-nav-item budget-dashboard-nav-item-active',
        generalSettngsLinkClass: 'budget-dashboard-nav-item',
        longTermGoalLinkClass: 'budget-dashboard-nav-item',
        shortTermGoalClass: 'budget-dashboard-nav-item'
    }

    renderMonthlyGoals = ()=>{
        this.setState({
            settingPage:<BudgetSettingsTotals/>,
            monthlyBudgetLinkClass:'budget-dashboard-nav-item budget-dashboard-nav-item-active',
            generalSettngsLinkClass: 'budget-dashboard-nav-item',
            longTermGoalLinkClass: 'budget-dashboard-nav-item',
            shortTermGoalClass: 'budget-dashboard-nav-item'
        })
    }

    renderGeneralSettings = ()=>{
        this.setState({
            settingPage:<BudgetSettingsGeneral/>,
            generalSettngsLinkClass:'budget-dashboard-nav-item budget-dashboard-nav-item-active',
            monthlyBudgetLinkClass: 'budget-dashboard-nav-item',
            longTermGoalLinkClass: 'budget-dashboard-nav-item',
            shortTermGoalClass: 'budget-dashboard-nav-item'
        })
    }

    renderLongtermGoals = ()=>{
        this.setState({
            settingPage:<BudgetSettingsGoals/>,
            longTermGoalLinkClass:'budget-dashboard-nav-item budget-dashboard-nav-item-active',
            monthlyBudgetLinkClass: 'budget-dashboard-nav-item',
            generalSettngsLinkClass: 'budget-dashboard-nav-item',
            shortTermGoalClass: 'budget-dashboard-nav-item'
        })
    }

    renderShortTermGoals = ()=>{
        this.setState({
            settingPage:<BudgetSettingsCurrentStatus/>,
            shortTermGoalClass:'budget-dashboard-nav-item budget-dashboard-nav-item-active',
            monthlyBudgetLinkClass: 'budget-dashboard-nav-item',
            generalSettngsLinkClass: 'budget-dashboard-nav-item',
            longTermGoalLinkClass: 'budget-dashboard-nav-item'
        })
    }

    render(){
        return(
            <div className='budget-settings-page'>
                <div className='budget-dashboard'>
                    <div className='budget-dashboard-nav'>
                        <div className='budget-dashboard-nav-logo'>
                            <a href="/"><FaCog color='#64a1a2' size='10rem'/></a>
                        </div>
                        <div className='budget-dashboard-nav-items'>
                            <div className={this.state.monthlyBudgetLinkClass} onClick={this.renderMonthlyGoals}>Monthly Budget goals</div>
                            <div className={this.state.generalSettngsLinkClass} onClick={this.renderGeneralSettings}>General Settings</div>
                            <div className={this.state.longTermGoalLinkClass} onClick={this.renderLongtermGoals}>Long-Term Goals</div>
                            <div className={this.state.shortTermGoalClass} onClick={this.renderShortTermGoals}>current status</div>
                        </div>
                    </div>
                    {this.state.settingPage}
                </div>
            </div>
        )
    }
}

export default BudgetSettingsPage