import React,{Fragment} from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Pages/Home";
import About from "./components/layouts/Pages/About";
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import EmployeeState from './components/layouts/employee/EmployeeState';
function App() {
  return (
    <EmployeeState> 
    <Router>
      <Fragment>
      <Navbar></Navbar>
        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/about' component={About}/>
        </Switch>

     
      </Fragment>
    </Router>
    </EmployeeState>
  );
}

export default App;
