import * as actionTypes from './action-types'
import axios from '../../axios-transactions'

export const addTransactionStart=() =>{return{type:actionTypes.ADD_START}}
export const addTransactionFailed =(error) =>{return{type:actionTypes.ADD_FAILED,error:error}}
export const addTransactionSuccess =(id,data) =>{return{type:actionTypes.ADD_SUCCESSFUL,transactionId: id,transactionData: data }
}
export const addTransaction = (transactionInfo,token) =>{
    return dispatch => {
        dispatch(addTransactionStart())
        axios.post('/transactions.json?auth=' +token, transactionInfo)
        .then(res =>{dispatch(addTransactionSuccess(res.data.name,transactionInfo))})
        .catch(err=>{dispatch(addTransactionFailed(err))})
    }
}

export const deleteTransactionStart=() =>{return{type:actionTypes.DELETE_START}}
export const deleteTransactionFailed =(error) =>{return{type:actionTypes.DELETE_FAILED,error:error}}
export const deleteTransactionSuccess =(id) =>{return{type:actionTypes.DELETE_SUCCESSFUL,transactionId: id }
}
export const deleteTransaction = (transactionId,token) =>{
    return dispatch => {
        dispatch(deleteTransactionStart())
        axios.delete('/transactions/'+transactionId+'.json?auth='+token)
        .then(res =>{dispatch(deleteTransactionSuccess(transactionId))})
        .catch(err=>{dispatch(deleteTransactionFailed(err))})
    }
}

export const fetchTransactionsSuccess = (transactions) =>{return{type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,transactions: transactions }}
export const fetchTransactionsFail = (error) => {return{type: actionTypes.FETCH_TRANSACTIONS_FAILED,error: error}}
export const fetchTransactionsStart =() => {return{type: actionTypes.FETCH_TRANSACTIONS_START}}

export const fetchTransactions = (token,userId) =>{
    return dispatch => {
        dispatch(fetchTransactionsStart())
        axios.get('/transactions.json?auth='+ token + '&orderBy="userId"&equalTo="' + userId + '"')
        .then(res=>{
            const fetchedData=[]
            for(let key in res.data){fetchedData.push({...res.data[key],id:key})}
            dispatch(fetchTransactionsSuccess(fetchedData))
        }).catch(err=>dispatch(fetchTransactionsFail(err)))
    }
}