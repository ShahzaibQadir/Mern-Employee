import React,{useReducer} from 'react';
import uuid from 'react-uuid';
import EmployeeContext from './EmployeeContext';
import EmployeeReducer from './EmployeeReducer';
import axios from 'axios';
import {
    ADD_EMP,         
    DELETE_EMP,      
    UPDATE_EMP,      
    CLEAR_CURRENT_EMP,   
    FILTER_EMP,      
    CLEAR_FILTER_EMP,
    SET_ALERT,       
    CLEAR_ALERT,     
    SET_CURRENT_EMP,
    GET_EMP
} from './actions';

const EmployeeState= props =>{
    const initialState ={
        employees : [],  
        current:null,
        filtered:null  
    };
    const [state, dispatch]= useReducer(EmployeeReducer,initialState);
    /*Add all actions here*/
     
 /*get all employees of users*/
    const getEmployee = async() =>{
        try{
            const res = await axios.get("/api/employee");
            dispatch({type: GET_EMP, payload: res.data});
        }catch(err)
        {
            console.log(err);
        }
    };

    /*Add Employee */
    const AddEmployee = async employee =>{
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/employee', employee,config);
             dispatch({
                type: ADD_EMP,
                payload : employee
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
    };

    const clearCurrent = () =>{
        dispatch({type: CLEAR_CURRENT_EMP});
    }; 
    
    const updateEmployee = employee =>{
        dispatch({type: UPDATE_EMP, payload: employee});
    };
    
    const filterEmployee = text =>{
        dispatch({type: FILTER_EMP,payload:text});
    }

    const clearFilter = () =>{
        dispatch({ type:CLEAR_FILTER_EMP });
    }

    return(
        <EmployeeContext.Provider 
        value={
            {
                employees: state.employees,
                current:state.current,
                filtered: state.filtered,
                AddEmployee,
                deleteEmployee,
                setCurrent, 
                clearCurrent,
                updateEmployee,
                filterEmployee, 
                clearFilter,
                getEmployee
            }
        }>
            {props.children}
        </EmployeeContext.Provider>
    );
}
export default EmployeeState; 