import React,{useReducer} from 'react'
import uuid from 'uuid';
import EmployeeContext from './EmployeeContext';
import EmployeeReducer from './EmployeeReducer';

import {
    ADD_EMP,         
    DELETE_EMP,      
    UPDATE_EMP,      
    SET_CURRENT,     
    FILTER_EMP,      
    CLEAR_FILTER_EMP,
    SET_ALERT,       
    CLEAR_ALERT     
} from './actions'

const EmployeeState= props =>{
    const initialState ={
        employees : [
            {
                id:1,
                name:"shahzaib",
                email:"shahzaib12@gmail.com",
                phone:"03472454115",
                designation:"Internee",
                salary:'5500'
            },
            {
                id:2,
                name:"shahzaib qadir",
                email:"shahzaibqadir12@gmail.com",
                phone:"03472454422",
                designation:"Internee",
                salary:'5300'
            },
        ]
    }
    const [state, dispatch]= useReducer(EmployeeReducer,initialState);
    /*Add all actions here*/
    return(
        <EmployeeContext.Provider 
        value={
            {
                employees: state.employees
            }
        }>
            {props.children}
        </EmployeeContext.Provider>
    );
}
export default EmployeeState; 