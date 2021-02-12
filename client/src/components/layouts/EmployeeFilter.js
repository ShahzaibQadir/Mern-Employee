import React,{useContext, useEffect, useRef} from 'react'
import EmployeeContext from './employee/EmployeeContext';


const EmployeeFilter = () => {
    const employeeContext = useContext(EmployeeContext);
    const text = useRef('');
    const {filterEmployee,clearFilter,filtered} = employeeContext;
    useEffect(()=>{
        if (filtered===null) {
            text.current.value ="";
         }
    });
    const onChange = e =>{
        if (text.current.value != '') {
            filterEmployee(e.target.value);    
        } else {
         clearFilter();    
        }
    } 
    return (
        <form>
            <input
            type="text"
            placeholder="Search Employee by Email, Name of Designation "
            onChange={onChange} 
            ref={text} className="form-control" /> 
        </form>
    )
}

export default EmployeeFilter
