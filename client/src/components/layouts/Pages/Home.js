import React,{useContext,useEffect } from 'react'
import AllEmployee from '../AllEmployee'
import EmployeeForm from '../EmployeeForm';
import EmployeeFilter from '../EmployeeFilter'
import AuthContext from '../auth/AuthContext';
const Home = props => {
    const authcontext =useContext(AuthContext);
    const {isAuthenticated,loadUser}=authcontext;
    useEffect(()=>{
        if (isAuthenticated) {
            loadUser();
        }
        else{
            props.history.push('/login')
        }
    },[isAuthenticated,props.history]);
    return (
        <div className="container">
            <div className='row'>
            <div className="col-sm-8">
                <EmployeeFilter/>
                <AllEmployee />
            </div>
            <div className="col-sm-4">
                <EmployeeForm></EmployeeForm>
            </div>
        </div>
        </div>
    )
}

export default Home
