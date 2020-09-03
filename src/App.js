import React from 'react';
import './App.scss';
import NavBar from '../src/containers/navbar/navbar'
import HomePage from './containers/home-page/home-page'
import SignUpPage from './containers/sign-up-page/sign-up-page'
import SignIpPage from './containers/sign-in-page/sign-in-page'
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/sign-up' exact component={SignUpPage}/>
          <Route path='/sign-in' exact component={SignIpPage}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
