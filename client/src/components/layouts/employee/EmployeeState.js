import React,{useReducer} from 'react';
import uuid from 'react-uuid';
import EmployeeContext from './EmployeeContext';
import EmployeeReducer from './EmployeeReducer';

import {
    ADD_EMP,         
    DELETE_EMP,      
    UPDATE_EMP,      
    SET_CURRENT,  
    CLEAR_CURRENT_EMP,   
    FILTER_EMP,      
    CLEAR_FILTER_EMP,
    SET_ALERT,       
    CLEAR_ALERT,     
    SET_CURRENT_EMP
} from './actions';

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
    {
        id:3,
        name:"Syed Muhammad Mehmam",
        email:"Mehmam123@gmail.com",
        phone:"03000340502",
        designation:"Junior Developer Python",
        salary:'20000'
    }
        ],
        current:null  
    };
    const [state, dispatch]= useReducer(EmployeeReducer,initialState);
    /*Add all actions here*/

    /*Add Action*/
    const AddEmployee = employee =>{
         employee.id = uuid();
        dispatch({
            type: ADD_EMP,
            payload :employee
        }); 
    };

    /*Delete Action*/
    const deleteEmployee = id =>{
        dispatch({
            type: DELETE_EMP,
            payload :id
        }); 
    };
    
    const setCurrent = employee =>{
        dispatch({type: SET_CURRENT_EMP, payload: employee});
    }

    const clearCurrent = () =>{
        dispatch({type: CLEAR_CURRENT_EMP});
    } 
    
    const updateEmployee = employee =>{
        dispatch({type: UPDATE_EMP, payload: employee});
    }


    return(
        <EmployeeContext.Provider 
        value={
            {
                employees: state.employees,
                current:state.current,
                AddEmployee,
                deleteEmployee,
                setCurrent, 
                clearCurrent,
                updateEmployee 
            }
        }>
            {props.children}
        </EmployeeContext.Provider>
    );
}
export default EmployeeState; 