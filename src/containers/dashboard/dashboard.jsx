import React from 'react'
import './dashboard.scss'
// import {connect} from 'react-redux'
// import * as actions from '../../store/actions/index'
import {Route,Switch,Redirect} from 'react-router-dom'
import DashboardLeft from './dashboard-left/dashboard-left'
import DashboardMain from './dashboard-main/dashboard-main'
import DashboardMainList from '../budget-list-page/budget-list/budget-list'
import DashboardRight from './dashboard-right/dashboard-right'
import DashboardMainSettings from '../budget-settings-page/budget-settings-page-general/budget-settings-page-general'
import DashboardDetails from './dashboard-settings/dashboard-settings'
class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard'>
                <DashboardLeft/>
                <Switch>
                    <Route path='/' exact component={DashboardMain}/>
                    <Route path='/list' exact component={DashboardMainList}/>
                    <Route path='/settings' exact component={DashboardMainSettings}/>
                    <Route path='/details' exact component={DashboardDetails}/>
                    <Redirect to='/'/>
                </Switch>
                <DashboardRight/>
            </div>
        )
    }
}
// const mapStateToProps = state =>{ return{ isloggedIn : state.auth.token !==null}}
// const mapDispatchToProps = dispatch =>{return{onLogOut : () => dispatch(actions.logout())}}
// export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
export default Dashboard