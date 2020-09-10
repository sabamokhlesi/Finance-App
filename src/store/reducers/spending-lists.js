import * as actionTypes from '../actions/action-types'


const initialState ={
    transactions: [],
    loading: false,
    error:null,
    errorMessage:'',
    successMessage:''
}


const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_START: return { ...state,loading:true,error:null,errorMessage:'',successMessage:''}
        case actionTypes.ADD_SUCCESSFUL:return{...state,loading:false,errorMessage:'',successMessage:'Successfull',transactions: state.transactions.concat({...action.transactionData, id: action.transactionId})}
        case actionTypes.ADD_FAILED: return {...state,loading:false,error:action.error,errorMessage:'Failed, please try again',successMessage:''}
        default: return state
    }
}

export default reducer