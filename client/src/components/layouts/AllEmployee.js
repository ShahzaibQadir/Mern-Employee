import React, { Fragment, useContext } from 'react'

import EmployeeContext from './employee/EmployeeContext';

const AllEmployee = () => {
    const employeeContext = useContext(EmployeeContext);
    const { employees } = employeeContext;
    return (
        <Fragment>
            {employees.map(employee => (
                <div className="card mt-3">
                    <h5 className="card-header">{employee.name}</h5>
                    <div className="card-body">
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-info">Edit</a>
                        <a href="#" className='btn btn-danger' >Delete</a>
                    </div>
                </div>

            ))}
        </Fragment>
    )
}

export default AllEmployee
