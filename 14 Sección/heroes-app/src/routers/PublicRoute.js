import React from 'react'
import {LoginScreen} from '../components/login/LoginScreen';
import {PropTypes} from 'prop-types';
import { DashboardRoutes } from './DashboardRoutes';
import { Navigate } from 'react-router';

export const PublicRoute = ({
    isAuthenticated,
}) => {
return !isAuthenticated?<LoginScreen />: <Navigate to='/' />;
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

