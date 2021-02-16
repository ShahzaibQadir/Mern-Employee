import React,{Fragment} from 'react';
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Pages/Home";
import About from "./components/layouts/Pages/About";
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import EmployeeState from './components/layouts/employee/EmployeeState';
import RegisterUser from './components/layouts/Register';
import LoginUser from './components/layouts/Login';
import UserAuth from './components/layouts/auth/AuthState';
import AuthToken from './components/layouts/auth/tokenAuth';
import './App.css';
import PrivateRoute from './components/layouts/auth/ProtectRoute';
  

if (localStorage.token) {
      AuthToken(localStorage.token);
  }

function App() {
  return (
    <UserAuth>
    <EmployeeState> 
    <Router>
      <Fragment>
      <Navbar></Navbar>
        <Switch>
          <PrivateRoute exact path = '/' component={Home}/>
          <Route exact path = '/about' component={About}/>
          <Route exact path = '/register' component={RegisterUser}/>
          <Route exact path = '/login' component={LoginUser}/>
        </Switch>

     
      </Fragment>
    </Router>
    </EmployeeState>
    </UserAuth>
  );
}

export default App;
