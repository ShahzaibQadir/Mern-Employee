import React, { Fragment, useContext } from 'react';

import EmployeeContext from './employee/EmployeeContext';

import Employeeitem from './Employeeitem';
const AllEmployee = () => {
    const employeeContext = useContext(EmployeeContext);
    const { employees } = employeeContext;
    return ( 
        <Fragment>
            {employees.map(employee => (
             <Employeeitem key={employee.id} employee ={employee}/>    

            ))}
        </Fragment>
    )
}

export default AllEmployee
