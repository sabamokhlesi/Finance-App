import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import authReducer from './store/reducers/auth'
import spendingListsReducer from './store/reducers/spending-lists'
import budgetCalculatorReducer from './store/reducers/budget-calculator'
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({auth:authReducer,list:spendingListsReducer,budgetCal:budgetCalculatorReducer})
const composeEnhancers =process.env.NODE_ENV=== 'development' ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter basename='/Finance-App/'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
</Provider>
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
