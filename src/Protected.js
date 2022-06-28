import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  function hasJWT() {
    if(localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }
  if (!hasJWT()) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
