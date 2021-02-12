import React,{useState} from 'react'

const Login = () => {
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
        console.log('User Registered Now');
    };

 return   (
        <form onSubmit={onSubmit}> 
            <div className="row">
                <div className="col-sm-6" style={{marginLeft:'4%',marginTop:'5%'}}>
                <h3>Login User</h3>
           
            
            <div className="mb-3">
            <label>Enter Email</label>
            <input className="form-control" type="email" name="email" value={email}
            onChange={onChange}/>
            </div>


            <div className="mb-3">
           <label>Enter Password</label>
            <input className="form-control" type="password" name="password" value={password}
            onChange={onChange}/>
            </div>
            
            
           
            <input type="submit" value='Logged in User' className="btn btn-success"/>

                </div>
            </div>
          

        </form>
    );

}


export default Login
