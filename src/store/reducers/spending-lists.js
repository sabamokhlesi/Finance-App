import * as actionTypes from '../actions/action-types'


const initialState ={
    transactionsList: [],
    loading: false,
    error:null,
    errorMessage:'',
    successMessage:'',
    editSuccessMessage:'',
    totalSpending:0
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_START: return { ...state,loading:true,error:null,errorMessage:'',successMessage:''}
        case actionTypes.ADD_SUCCESSFUL:return{...state,loading:false,errorMessage:'',successMessage:'Successful',transactionsList: state.transactionsList.concat({...action.transactionData, _id: action.transactionId})}
        case actionTypes.ADD_FAILED: return {...state,loading:false,error:action.error,errorMessage:'Failed, please try again',successMessage:''}
        
        case actionTypes.EDIT_START: return { ...state,loading:true,error:null,errorMessage:'',editSuccessMessage:''}
        case actionTypes.EDIT_SUCCESSFUL:return{...state,loading:false,errorMessage:'',editSuccessMessage:'Saved edits successfully',...state.transactionsList.splice(state.transactionsList.findIndex(transaction => transaction._id === action.transactionId),1),transactionsList: state.transactionsList.concat({...action.transactionData, _id: action.transactionId})}
        case actionTypes.EDIT_FAILED: return {...state,loading:false,error:action.error,errorMessage:'Failed, please try again',editSuccessMessage:''}
        
        case actionTypes.DELETE_START: return { ...state,loading:true,error:null}
        case actionTypes.DELETE_SUCCESSFUL:return{...state,loading:false,...state.transactionsList.splice(state.transactionsList.findIndex(transaction => transaction._id === action.transactionId),1)}
        case actionTypes.DELETE_FAILED: return {...state,loading:false,error:action.error}
        
        case actionTypes.FETCH_TRANSACTIONS_START:return{...state,loading: true}
        case actionTypes.FETCH_TRANSACTIONS_SUCCESS:return{...state,transactionsList: action.transactions, loading: false}
        case actionTypes.FETCH_TRANSACTIONS_FAILED:return{...state,loading: false}
        
        default: return state
    }
}

export default reducer