import * as actionTypes from '../actions/action-types'


const initialState ={
    transactionsList:[],
    budgetInfo:{
        categories:{
            groceries: ''
        },
        savingGoal:'',
        totalBudget:'',
        totalEarning:''
    },
    loading:false,
    error:null
}


const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.FETCH_BUDGETINFO_START:return{...state,loading: true,error:null}
        case actionTypes.FETCH_BUDGETINFO_SUCCESS:return{...state,budgetInfo: action.budgetInfo, loading: false,error:null}
        case actionTypes.FETCH_BUDGETINFO_FAILED:return{...state,loading: false,error:action.error}

        case actionTypes.SAVE_SETTINGS_CHANGES_START:return{...state,loading: true,error:null}
        case actionTypes.SAVE_SETTINGS_CHANGES_SUCCESS:return{...state,budgetInfo: action.budgetInfo, loading: false,error:null}
        case actionTypes.SAVE_SETTINGS_CHANGES_FAILED:return{...state,loading: false,error:action.error}
        
        default: return state
    }
}

export default reducer