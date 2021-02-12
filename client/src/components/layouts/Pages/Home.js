import React from 'react'
import AllEmployee from '../AllEmployee'
import EmployeeForm from '../EmployeeForm';
import EmployeeFilter from '../EmployeeFilter'
const Home = () => {
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
