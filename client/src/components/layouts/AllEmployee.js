import React, { Fragment, useContext, useEffect } from 'react';

import EmployeeContext from './employee/EmployeeContext';

import Employeeitem from './Employeeitem';
const AllEmployee = () => {
    const employeeContext = useContext(EmployeeContext);
    const { employees, filtered, getEmployee, loading } = employeeContext;
    useEffect(()=>{
        getEmployee();
    },[]);
    if (employees.length === 0) {
      return <h3 className="alert alert-danger">Add New Employee</h3>        
    }
    return ( 
        <Fragment>
            {filtered !==null ? filtered.map(employee => (
             <Employeeitem key={employee.id} employee ={employee}/>    
            )): employees.map(employee => (
                <Employeeitem key={employee.id} employee ={employee}/>    
   
               ))};
            
        </Fragment>
    )
}

export default AllEmployee
