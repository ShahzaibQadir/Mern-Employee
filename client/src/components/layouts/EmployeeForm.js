import React,{useState,useContext,useEffect} from 'react'
import EmployeeContext from '../layouts/employee/EmployeeContext';
const EmployeeForm = () => {
    const employeeContext = useContext(EmployeeContext);
    const { AddEmployee, updateEmployee , current , clearCurrent } = employeeContext;
    useEffect(()=> {
        if ( current !== null) {
            setemployee(current);            
        }
        else{
            setemployee({
                name: '',
                email: '',
                phone: '',
                designation: '',
                salary:''
                });             
        }
    }, [employeeContext,current]); 
    const [employee ,setemployee] = useState({
        name: '',
        email: '',
        phone: '',
        designation: '',
        salary:''
    });
    const {name,email,phone,designation,salary}=employee;
    
    const onChange = e => setemployee({
        ...employee,
        [e.target.name]: e.target.value
    });
    const onSubmit = e =>{  
        e.preventDefault();
        if (current === null) {
            AddEmployee(employee);
        }
        else
        {
            updateEmployee(employee);
        }
     

    };

    const ClearAll = () =>{
          clearCurrent();
    }

    return (
        <div>
             <h3 className="alert alert-info">{current ? 'Edit Employee' : "Add New Employee"}</h3>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label>Enter Name</label>
            <input className="form-control" type="text" name="name" value={name}
            onChange={onChange}/>
            </div>
            
            <div className="mb-3">
            <label>Enter Email</label>
            <input className="form-control" type="email" name="email" value={email}
            onChange={onChange}/>
            </div>
            
            <div className="mb-3">
            <label>Enter Phone</label>
            <input className="form-control" type="text" name="phone" value={phone}
            onChange={onChange}/>
            </div>
            
            <div className="mb-3">
            <label>Enter Designation</label>
            <input className="form-control" type="text" name="designation" value={designation}
            onChange={onChange}/>
            </div>
 
            <div className="mb-3">
            <label>Enter Salary</label>
            <input className="form-control" type="text" name="salary" value={salary}
            onChange={onChange}/>
            </div>

            <input type="submit" value={current ? 'Update Now' : 'Save Now'} className="btn btn-success"/>
            {current && (
                <input
                type='button'
                value ='Clear Now'
                onClick={ClearAll}
                className="btn btn-warning ml-5"
                style={{marginLeft:'3%'}}/>
            )}     
        </form>    
        </div>
    )
}

export default EmployeeForm
