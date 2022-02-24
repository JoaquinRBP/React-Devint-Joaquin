import React from 'react'
import { Navigate, useLocation} from 'react-router';
import {PropTypes} from 'prop-types';
import { DashboardRoutes } from './DashboardRoutes';

export const PrivateRoute = ({
    isAuthenticated,
}) => {
    const {pathname} = useLocation();
    localStorage.setItem('lastpath',pathname);
return isAuthenticated? <DashboardRoutes />: <Navigate to='/login'/>;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}
