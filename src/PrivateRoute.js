import React from 'react'
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({element:Component,requiredRole,...rest}) => {

  const jwt = sessionStorage.getItem('jwtToken');
  const role = sessionStorage.getItem('role');

  const isTokenValid = ()=>{
    if(jwt)
    {
      try 
      {
        const decodedToken = jwtDecode(jwt);
        console.log('decoded jwt token Expiration time: ',decodedToken.exp);
        const currentTime = Date.now()/1000;
        return decodedToken.exp > currentTime;
      } 
      catch (error)
      {
        console.error('Invalid Token',error);
        return false;
      }
    }
    return false;
  }

  if(!jwt && !role)
  {
    sessionStorage.clear();
    localStorage.clear();
    return <Navigate to ='/'/>
  }

  if(!jwt || !isTokenValid())
  {
    sessionStorage.clear();
    localStorage.clear();
    return <Navigate to='/'/>
  }

  if(!requiredRole && role !== requiredRole && !jwt)
  {
    sessionStorage.clear();
    localStorage.clear();
    return <Navigate to='/'/>
  }

  return <Component {...rest} />

}

export default PrivateRoute;
