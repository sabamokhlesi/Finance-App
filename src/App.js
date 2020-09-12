import React from 'react';
import './App.scss';
import NavBar from '../src/containers/navbar/navbar'
import HomePage from './containers/home-page/home-page'
import SignUpPage from './containers/sign-up-page/sign-up-page'
import SignInPage from './containers/sign-in-page/sign-in-page'
import BudgetCalpage from './containers/budget-calculator/budget-calculator'
import * as actions from './store/actions/index'
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
class App extends React.Component{
  componentWillMount(){this.props.onTryAutoSignUp()}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/sign-up' exact component={SignUpPage}/>
            <Route path='/sign-in' exact component={SignInPage}/>
            <Route path='/my-list' exact component={BudgetCalpage}/>
          </Switch>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    isSignedUp : state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignUp: () => dispatch(actions.checkSignIn())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
