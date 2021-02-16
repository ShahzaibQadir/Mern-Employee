import React,{useContext , useEffect ,Fragment} from 'react';
import {Link} from 'react-router-dom';
import authContext from '../layouts/auth/AuthContext';

const Navbar = () => {
const authcontext = useContext(authContext);
const {user,isAuthenticated,logout}=authcontext; 

const Exit =() => {
    logout();
}
const authlink =(
    <Fragment>

<li className="nav-item">
<Link className="nav-link active"
 aria-current="page"
 to="/">
 Home
 </Link>
 </li> 

 <li className="nav-item">
 <Link className='nav-link' to='/'>
 {user && user.name}
 </Link> 
 </li>


<li className="nav-item">
<a onClick={Exit} className="nav-link active" 
href ="/login">
 Logout
 </a>
 </li> 

    </Fragment>
);

const unauthlink =(
    <Fragment>

<li className="nav-item">
    <Link className="nav-link" to="/about">
        About App
        </Link>
</li>
<li className="nav-item">
    <Link className="nav-link" to="/register">
        Register
        </Link>
</li>
<li className="nav-item">
    <Link className="nav-link" to="/login">
        Login
        </Link>
</li>


    </Fragment>
);
    return (
        <div className="navbar navbar-expand-lg navbar-primary bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Employee App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        {isAuthenticated ? authlink: unauthlink}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
