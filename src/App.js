import React from 'react';
import './App.scss';
import NavBar from './containers/home-page/navbar/navbar'
import HomePage from './containers/home-page/home-page'
import SignUpPage from './containers/home-page/sign-up-page/sign-up-page'
import SignInPage from './containers/home-page/sign-in-page/sign-in-page'
import ErrorPage from './components/404/404'
import Dashboard from './containers/dashboard/dashboard'
import * as actions from './store/actions/index'
import {connect} from 'react-redux'
import {Redirect, Route,Switch} from 'react-router-dom'
class App extends React.Component{

  componentDidMount(){
    this.props.onTryAutoSignUp()
  }

  render(){
    return (
      <div className="App">
        {!this.props.isSignedUp?
          <header className="App-header">
            <NavBar/>
            <Switch>
              <Route path='/' exact component={!this.props.isSignedUp?HomePage:Dashboard}/>
              <Route path='/sign-up' exact component={SignUpPage}/>
              <Route path='/sign-in' exact component={SignInPage}/>
              {/* <Route path='/my-list' exact component={BudgetListPage}/>
              <Route path='/budget-settings'exact component={BudgetSettingsPage}/> */}
              <Route path='/404' exact component={ErrorPage}/>
              <Redirect to='/404'/>
            </Switch>
        </header>
        :<Dashboard/>}
      </div>
    );
  }
}

const mapStateToProps = state =>{return{isSignedUp : state.auth.token !== null}}

const mapDispatchToProps = dispatch =>{return{onTryAutoSignUp: () => dispatch(actions.checkSignIn())}}

export default connect(mapStateToProps,mapDispatchToProps)(App);
