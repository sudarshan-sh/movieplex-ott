import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// homepage will be a child of private route---
// collecting rest of the props in the private route and placing in the route that we're returning.
const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  if (!isUser) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default PrivateRoute;
