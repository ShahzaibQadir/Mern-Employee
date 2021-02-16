import React,{useContext,} from 'react';
import {Route,Redirect, Router} from 'react-router-dom';
import AuthContext from './AuthContext';
const ProtectRoute = ({component : Component, ...rest}) => {
const authcontext =useContext(AuthContext);
const {isAuthenticated,loading}=authcontext;    
    return (
        <Route
              {...rest}
              render={
                  props => !isAuthenticated && !loading ? (
                      <Redirect to="/login"/>
                  ):(
                      <Component {...props}/>
                  )
              }
        />
    );
};

export default ProtectRoute
 