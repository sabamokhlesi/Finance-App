import * as actionTypes from './action-types'
import axios from 'axios'

export const authStart = () => {
    return{type:actionTypes.AUTH_START}
}

export const authSuccess = (token,userId) => {
    return{idToken:token,userId:userId,type:actionTypes.AUTH_SUCCESS}
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userID')
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const addUser = (email,password,isValid) =>{
    return dispatch => {
        isValid?dispatch(authStart()):dispatch(authFail('invalid info'))
        
        const authData = {email:email,password:password,returnSecureToken:true}
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgHroMvqljoCEKAGKtLAsOHEnvNzy2wpw"
        axios.post(url,authData)
        .then(res => {
            const expirationDate = new Date (new Date().getTime()+res.data.expirationDate*1000)
            localStorage.setItem("token",res.data.idToken)
            localStorage.setItem("expirationDate",expirationDate)
            localStorage.setItem("userID",res.data.localId)

            dispatch(authSuccess(res.data.idToken,res.data.localId))
        })
        .catch(err=>{dispatch(authFail(err));console.log(err)})
    }
}

export const userSignIn = (email,password) =>{
    return dispatch => {
        dispatch(authStart())
        
        const authData = {email:email,password:password,returnSecureToken:true}
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgHroMvqljoCEKAGKtLAsOHEnvNzy2wpw"
        axios.post(url,authData)
        .then(res => {
            const expirationDate = new Date (new Date().getTime()+res.data.expirationDate*1000)
            localStorage.setItem("token",res.data.idToken)
            localStorage.setItem("expirationDate",expirationDate)
            localStorage.setItem("userID",res.data.localId)

            dispatch(authSuccess(res.data.idToken,res.data.localId))
        })
        .catch(err=>{dispatch(authFail(err));console.log(err)})
    }
}


export const checkSignIn = () =>{
    return dispatch => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userID')
        dispatch (authSuccess(token,userId))
    }
}