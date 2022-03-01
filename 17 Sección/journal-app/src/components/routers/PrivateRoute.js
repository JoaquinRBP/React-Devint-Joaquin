import React from 'react'
import { Navigate, useLocation} from 'react-router';
import {PropTypes} from 'prop-types';
import {JournalScreen} from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
export const PrivateRoute = ({
    isAuthenticated,
}) => {
    const {pathname} = useLocation();
    localStorage.setItem('lastpath',pathname);
return isAuthenticated? <JournalScreen />: <Navigate to='/auth/login' />;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}
