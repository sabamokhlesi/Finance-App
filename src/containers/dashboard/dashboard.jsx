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
import DashboardSettings from './dashboard-settings/dashboard-edit/dashboard-edit'
import DashboardSettings2 from './dashboard-settings/dashboard-edit/dashboard-edit2'
import DashboardDetails from './dashboard-settings/dashboard-settings'
// import ErrorPage from '../../components/404/404'
class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard'>
                <DashboardLeft/>
                <Switch>
                    <Route path='/' exact component={DashboardMain}/>
                    <Route path='/list' exact component={DashboardMainList}/>
                    <Route path='/settings' exact component={DashboardSettings}/>
                    <Route path='/settings2' exact component={DashboardSettings2}/>
                    <Route path='/details' exact component={DashboardDetails}/>
                    <Route path='/goals' exact component={DashboardMainSettings}/>
                    {/* <Route path='/404' exact component={ErrorPage}/>
                    <Redirect to='/404'/> */}
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