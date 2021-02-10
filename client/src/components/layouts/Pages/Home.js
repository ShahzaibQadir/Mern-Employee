import React from 'react'
import AllEmployee from '../AllEmployee'

const Home = () => {
    return (
        <div className="container">
            <div className="col-sm-9">
                <AllEmployee></AllEmployee>
            </div>
            <div className="col-sm-2">
                <p>Form will display here</p>
            </div>
        </div>
    )
}

export default Home
