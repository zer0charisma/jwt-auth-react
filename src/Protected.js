import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  // if there is no `token` in localStorage then redirect user to /.
  if (!localStorage.getItem("token") {
    return <Navigate to="/" replace />;
  }
  // if there is a `token` in localStorage
  // then return the children.
  // In this case it returns <Profile>
  // since Profile is a child of Protected
  // (<Protected><Profile /></Protected>)
  return children; 
};

export default Protected;
