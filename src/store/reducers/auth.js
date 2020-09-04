import * as actionTypes from '../actions/action-types'

const initialState ={
    token: null,
    userId:null,
    loading: false,
    error: false
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const authStart = (state,action) =>{ updateObject(state,{loading:true, error:null})}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state,action)
        default: return state
    }

}
export default reducer