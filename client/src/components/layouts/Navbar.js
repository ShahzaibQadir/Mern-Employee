import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
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
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                                </Link>                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About App
                                </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar