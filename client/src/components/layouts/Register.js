import React,{useState, useContext} from 'react'
import AuthContext from './auth/AuthContext';

const Register = () => {
    const authcontext= useContext(AuthContext);

    const { registeruser } =authcontext;
    const [user ,setuser]= useState({
          name:'',
          email:'',
          password:'',
          cpassword:'',

    });
    const {name,email,password,cpassword}=user;

    const onChange = e =>
    setuser({
       ...user,
       [e.target.name]: e.target.value 
    });
    const onSubmit = e => {
        e.preventDefault();
        registeruser({
            name,
            email,
            password
        });  
    };
    return (
        <form onSubmit={onSubmit}> 
            <div className="row">
                <div className="col-sm-6" style={{marginLeft:'4%',marginTop:'5%'}}>
                <h3>Register as New User</h3>
           <div className="mb-3">
           <label>Enter Name</label>
            <input className="form-control" type="text" name="name" value={name}
            required
            onChange={onChange}/>
            </div>
            
            <div className="mb-3">
            <label>Enter Email</label>
            <input className="form-control" type="email" name="email" value={email}
            required
            onChange={onChange}/>
            </div>


            <div className="mb-3">
           <label>Enter Password</label>
            <input className="form-control" type="password" name="password" value={password}
            required
            onChange={onChange}/>
            </div>
            
            
            <div className="mb-3">
            <label>Confirm Password</label>
            <input className="form-control" type="password" name="cpassword" value={cpassword}
            required
            onChange={onChange}/>
            </div>
            
            <input type="submit" value='Register Now' className="btn btn-success"/>

                </div>
            </div>
          

        </form>
    );
}

export default Register
