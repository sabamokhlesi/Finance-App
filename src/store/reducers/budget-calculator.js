// import * as actionTypes from '../actions/action-types'


const initialState ={
    transactionsList:[],
    loading:false
}


const reducer = (state=initialState,action) => {
    switch(action.type){
        // case actionTypes.FETCH_TRANSACTIONS_START:return{...state,loading: true}
        // case actionTypes.FETCH_TRANSACTIONS_SUCCESS:return{...state,transactionsList: action.transactions, loading: false}
        // case actionTypes.FETCH_TRANSACTIONS_FAILED:return{...state,loading: false}
        default: return state
    }
}

export default reducer