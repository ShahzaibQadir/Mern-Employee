import React from 'react'
import AllEmployee from '../AllEmployee'
import EmployeeForm from '../EmployeeForm';

const Home = () => {
    return (
        <div className="container">
            <div className='row'>
            <div className="col-sm-8">
                <AllEmployee></AllEmployee>
            </div>
            <div className="col-sm-4">
                <EmployeeForm></EmployeeForm>
            </div>
        </div>
        </div>
    )
}

export default Home
