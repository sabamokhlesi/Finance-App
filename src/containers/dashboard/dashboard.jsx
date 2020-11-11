import React from 'react'
import './dashboard.scss'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import {Route,Switch,Redirect} from 'react-router-dom'
import DashboardLeft from './dashboard-left/dashboard-left'
import DashboardMain from './dashboard-main/dashboard-main'
import DashboardMainList from './dashboard-list/budget-list'
import DashboardRight from './dashboard-right/dashboard-right'
import DashboardSettings from './dashboard-settings/dashboard-settings'
import DashboardDetails from './dashboard-details/dashboard-details'
// import ErrorPage from '../../components/404/404'
class Dashboard extends React.Component{
    state={
        navRightOpen:false,
        navLeftOpen:false
    }
    componentDidMount(){
        this.props.onFetchBudgetInfo(this.props.token,this.props.userId)
        this.props.onFetchTransactions(this.props.token,this.props.userId) 
      }

    componentDidUpdate(){console.log(this.state)}

    render(){
        return(
            <div className='dashboard'>
                <DashboardLeft onLogOut={this.props.onLogOut} style={this.state.navLeftOpen?{transform: 'translateX(0)'}:null}/>
                <Switch>
                    <Route path='/' exact component={DashboardMain}/>
                    <Route path='/list' exact component={DashboardMainList}/>
                    <Route path='/settings' exact component={DashboardSettings}/>
                    <Route path='/details' exact component={DashboardDetails}/>
                    {/* <Route path='/goals' exact component={}/> */}
                    {/* <Route path='/404' exact component={ErrorPage}/>
                    <Redirect to='/404'/> */}
                    <Redirect to='/'/>
                </Switch>
                <DashboardRight style={this.state.navRightOpen?{transform: 'translateX(0)'}:null} transactionsList={this.props.transactionsList} budgetSettingsInfo={this.props.budgetSettingsInfo}/>
                <div className='right-nav' onClick={()=>this.setState({navRightOpen:true,navLeftOpen:false})}>+</div>
                <div className="modal__overlay"  style={this.state.navRightOpen || this.state.navLeftOpen?{display:"block"}:{display:'none'}} onClick={()=>this.setState({navRightOpen:false,navLeftOpen:false})}></div>
                <div className='left-nav' onClick={()=>this.setState({navRightOpen:false,navLeftOpen:true})}>=</div>
            </div>
        )
    }
}
const mapStateToProps = state =>{return{
     isloggedIn : state.auth.token !==null,
     token : state.auth.token,
     userId :state.auth.userId,
     budgetSettingsInfo:state.budgetCal.budgetInfo,
    transactionsList:state.list.transactionsList.currentMonth
    }}
const mapDispatchToProps = dispatch =>{return{
    onLogOut : () => dispatch(actions.logout()),
    onFetchTransactions:(token,userId)=>{dispatch(actions.fetchTransactions(token,userId))},
    onFetchBudgetInfo:(token,userId)=>{dispatch(actions.fetchBudgetInfo(token,userId))}
}}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
// export default Dashboard