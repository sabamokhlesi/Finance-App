import React from 'react'
import './dashboard.scss'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import {Route,Switch,Redirect} from 'react-router-dom'
import DashboardLeft from './dashboard-left/dashboard-left'
import DashboardMain from './dashboard-main/dashboard-main'
import DashboardMainList from '../budget-list-page/budget-list/budget-list'
import DashboardRight from './dashboard-right/dashboard-right'
import DashboardMainSettings from '../budget-settings-page/budget-settings-page-general/budget-settings-page-general'
import DashboardSettings from './dashboard-settings/dashboard-settings'
import DashboardDetails from './dashboard-details/dashboard-details'
// import ErrorPage from '../../components/404/404'
class Dashboard extends React.Component{

    componentDidMount(){
        this.props.onFetchBudgetInfo(this.props.token,this.props.userId)
        this.props.onFetchTransactions(this.props.token,this.props.userId) 
      }

    render(){
        return(
            <div className='dashboard'>
                <DashboardLeft/>
                <Switch>
                    <Route path='/' exact component={DashboardMain}/>
                    <Route path='/list' exact component={DashboardMainList}/>
                    <Route path='/settings' exact component={DashboardSettings}/>
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
const mapStateToProps = state =>{return{
     isloggedIn : state.auth.token !==null,
     token : state.auth.token,
     userId :state.auth.userId
    }}
const mapDispatchToProps = dispatch =>{return{
    onLogOut : () => dispatch(actions.logout()),
    onFetchTransactions:(token,userId)=>{dispatch(actions.fetchTransactions(token,userId))},
    onFetchBudgetInfo:(token,userId)=>{dispatch(actions.fetchBudgetInfo(token,userId))}
}}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
// export default Dashboard