import React,{useState,useContext,useEffect} from 'react'
import AuthContext from './auth/AuthContext';

const Login = props => {
    const authcontext= useContext(AuthContext);

    const { loginuser, isAuthenticated } =authcontext;

    useEffect(()=>{
        if (isAuthenticated) {
            props.history.push('/');
      }
    }, [isAuthenticated,props.history]); 

    const [user ,setuser]= useState({
          
          email:'',
          password:'',
         

    });
    const {email,password}=user;

    const onChange = e =>
    setuser({
       ...user,
       [e.target.name]: e.target.value 
    });
    const onSubmit = e => {
        e.preventDefault();
        loginuser({
            email,
            password
        });
    };

 return (
        <form onSubmit={onSubmit}> 
            <div className="row">
                <div className="col-sm-6" style={{marginLeft:'4%',marginTop:'5%'}}>
                <h3>Login User</h3>
           
            
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
            
            
           
            <input type="submit" value='Logged in User' className="btn btn-success"/>

                </div>
            </div>
          

        </form>
    );

}


export default Login
