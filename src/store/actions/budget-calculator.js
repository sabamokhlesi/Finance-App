import * as actionTypes from './action-types'
import axios from '../../axios-transactions'


export const fetchBudgetInfoSuccess = (info) =>{return{type: actionTypes.FETCH_BUDGETINFO_SUCCESS,budgetInfo: info }}
export const fetchBudgetInfoFail = (error) => {return{type: actionTypes.FETCH_BUDGETINFO_FAILED,error: error}}
export const fetchBudgetInfoStart =() => {return{type: actionTypes.FETCH_BUDGETINFO_START}}

export const fetchBudgetInfo = (token,userId) =>{
    return dispatch => {
        dispatch(fetchBudgetInfoStart())
        axios.get('/budgetInfo/'+userId+'.json?auth='+ token)
        .then(res=>{
            const fetchedData =res.data
            dispatch(fetchBudgetInfoSuccess(fetchedData))
        }).catch(err=>dispatch(fetchBudgetInfoFail(err)))
    }
}

export const saveChangedSettingsInfoSuccess = (info) =>{return{type: actionTypes.SAVE_SETTINGS_CHANGES_SUCCESS,budgetInfo: info }}
export const saveChangedSettingsInfoFail = (error) => {return{type: actionTypes.SAVE_SETTINGS_CHANGES_FAILED,error: error}}
export const saveChangedSettingsInfoStart =() => {return{type: actionTypes.SAVE_SETTINGS_CHANGES_START}}

export const saveChangedSettingsInfo =(newInfo,token,userId)=>{
    return dispatch => {
        dispatch(saveChangedSettingsInfoStart())
        axios.put('/budgetInfo/'+userId+'.json?auth='+token,newInfo)
        .then(res =>{dispatch(saveChangedSettingsInfoSuccess(newInfo))})
        .catch(err=>{dispatch(saveChangedSettingsInfoFail(err))})
    }
}