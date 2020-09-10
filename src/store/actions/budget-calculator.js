import * as actionTypes from './action-types'
import axios from '../../axios-transactions'
export const fetchTransactionsSuccess = (transactions) =>{
    return{
        type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,
        transactions: transactions
    }
}

export const fetchTransactionsFail = (error) => {
    return{
        type: actionTypes.FETCH_TRANSACTIONS_FAILED,
        error: error
    }
}

export const fetchTransactionsStart =() => {
    return{
        type: actionTypes.FETCH_TRANSACTIONS_START
    }
}

export const fetchTransactions = (token,userId) =>{
    return dispatch => {
        dispatch(fetchTransactionsStart())
        axios.get('/transactions.json?auth='+ token + '&orderBy="userId"&equalTo="' + userId + '"')
        .then(res=>{
            const fetchedData=[]
            for(let key in res.data){fetchedData.push({...res.data[key],id:key})}
            dispatch(fetchTransactionsSuccess(fetchedData))
            console.log(fetchedData)
        })
        .catch(err=>dispatch(fetchTransactionsFail(err)))
    }
}