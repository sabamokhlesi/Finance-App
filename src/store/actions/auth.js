import * as actionTypes from './action-types'
import axios from 'axios'

export const authStart = () => {
    return{type:actionTypes.AUTH_START}
}

export const authSuccess = (token,userId) => {
    return{idtoken:token,userId:userId,type:actionTypes.authSuccess}
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};