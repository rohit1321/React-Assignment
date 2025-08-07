import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
// here i use this for protect a route and bacially it check user login or not from isAuthenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
