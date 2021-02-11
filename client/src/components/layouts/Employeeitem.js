import React,{useContext} from 'react'
import { CLEAR_CURRENT_EMP } from './employee/actions';
import EmployeeContext from './employee/EmployeeContext';

const Employeeitem = ({employee}) => {
    const employeeContext = useContext(EmployeeContext);
    const {deleteEmployee, setCurrent, clearCurrent,updateEmployee }=employeeContext;
    const {id,name,phone,email,designation,salary}=employee;
    const onDelete =() => {
        deleteEmployee(id);
        clearCurrent();
    }
    return (
        <div>
            <div className="card mt-3">
                        <h5 className="card-header">{employee.name}</h5>
    <div className="card-body">
         <p className="card-text">
        Designation:{employee.designation}  
        </p>
        <p className="card-text">
        Email:{employee.email}  
        </p>
        <p className="card-text">
        Phone:{employee.phone}  
        </p>
        <p className="card-text">
        Salary:{employee.salary}  
        </p>
        <a href="#"  onClick = {() => setCurrent(employee)} className="btn btn-info">Edit</a>
        <a href="#" className='btn btn-danger 'onClick={onDelete}  style={{marginLeft:'3%'}} >Delete</a>
    </div>
    </div> 
        </div>
    )
}

export default Employeeitem
