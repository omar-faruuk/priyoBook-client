import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContex } from './../../App';

const PrivateRoute = ({children}) => {
    const [logedInUser, setLogedInUser] = useContext(userContex);
    const location = useLocation()
    
    const auth2 =logedInUser.name || logedInUser.email;
    return auth2 ? children :
        <Navigate to={'/login'} state={{ from: location }} replace />
};

export default PrivateRoute;