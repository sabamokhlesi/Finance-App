import * as actionTypes from '../actions/action-types'


const initialState ={
    
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.BUDGET_CALCULATE_SUCCESS: return updateObject(state,action)
        default: return state
    }
}

export default reducer