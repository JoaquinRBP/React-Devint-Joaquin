import React from 'react'
import {PropTypes} from 'prop-types';
import { Navigate } from 'react-router';
import { AuthRouter } from './AuthRouter';

export const PublicRoute = ({
    isAuthenticated,
}) => {
return !isAuthenticated?<AuthRouter />: <Navigate to='/' />;
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

