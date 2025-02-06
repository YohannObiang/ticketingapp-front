import React from 'react';
import { Navigate } from 'react-router-dom';

function RouteProtegee({ element: Component }) {
  const token = localStorage.getItem('token');
  return token ? <Component /> : <Navigate to="/verifier-otp" />;
}

export default RouteProtegee;

