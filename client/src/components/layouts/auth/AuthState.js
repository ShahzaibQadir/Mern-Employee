import React ,{useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import {
REGISTER_USER,        
LOGOUT, 
LOAD_USER,             
REGISTRATION_FAILED, 
LOGIN_USER,          
LOGIN_FAILED,        
AUTH_ERROR
} from '../employee/actions';

const AuthState = props => {
    const initialState ={
        token:localStorage.getItem('token'),
        isAuthenticated:null,
        user:null,
        loading:true,
        error:null
    } 
    const [state,dispatch]=useReducer(AuthReducer,initialState);

    /*Load User Account*/
    const loadUser = async () =>{
        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: LOAD_USER,
                payload:res.data
            })
         } catch (err) {
           dispatch({ type: AUTH_ERROR }); 
        }
    }

    /*Register User */
    const registeruser = async formData =>{
        const config ={
            header:{
                'Context-Type':'application/json'
            } 
        }
        try{
            const res = await axios.post('/api/users',formData,config);
            dispatch({
                type: REGISTER_USER,
                payload: res.data
            });
        }catch(err){
           dispatch({
            type:REGISTRATION_FAILED,
            payload:err.response.data.msg;    
           });
        }
    };
   return(
       <AuthContext.Provider value={{
           token: state.token,
           isAuthenticated: state.isAuthenticated,
           loading: state.loading,
           user:state.user,
           error: state.error,
           registeruser
       }}> 
       {props.children}
       </AuthContext.Provider>
   );
};

export default AuthState

