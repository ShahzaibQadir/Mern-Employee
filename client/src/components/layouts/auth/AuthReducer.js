import {
    REGISTER_USER,        
    LOGOUT,              
    REGISTRATION_FAILED, 
    LOGIN_USER,          
    LOGIN_FAILED,
    AUTH_ERROR,
    LOAD_USER
    } from '../employee/actions';

    export default (state, action)=>{
        switch (action.type) {
            case REGISTER_USER:
                localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading: false
            };
            case REGISTRATION_FAILED:
                localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                token: null,
                isAuthenticated:false,
                loading: false,
                user:null,
                error: action.payload
            };
            case LOAD_USER:
                localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                token: null,
                isAuthenticated:false,
                loading: false,
                user:null,
                error: action.payload
            };
            default:[
                ...state
            ]
        }
    }