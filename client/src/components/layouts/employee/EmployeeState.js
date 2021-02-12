import React,{useReducer} from 'react';
import uuid from 'react-uuid';

import EmployeeContext from './EmployeeContext';
import EmployeeReducer from './EmployeeReducer';
import axios from 'axios';
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
        employees : [],  
        current:null,
        filterd:null  
    };
    const [state, dispatch]= useReducer(EmployeeReducer,initialState);
    /*Add all actions here*/

    /*Add Action*/
    const AddEmployee = async employee =>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }

        }
        try{
            const res = await axios.post('/api/employee',employee,config);
            dispatch({
                type: ADD_EMP,
                payload :employee
            }); 
        }
        catch(err)
        {
          console.log(err);   
        }
        
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
                filterd: state.filtered,
                AddEmployee,
                deleteEmployee,
                setCurrent, 
                clearCurrent,
                updateEmployee,
                filterEmployee, 
                clearFilter
            }
        }>
            {props.children}
        </EmployeeContext.Provider>
    );
}
export default EmployeeState; 