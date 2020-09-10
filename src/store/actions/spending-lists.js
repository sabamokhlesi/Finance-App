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