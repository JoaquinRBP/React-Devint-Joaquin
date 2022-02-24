import React, { useContext } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import {PrivateRoute} from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {
    const {user} = useContext(AuthContext);
return (
    <Router>
        <div>
        <Routes>
            <Route exact path="/login" element={<PublicRoute isAuthenticated={user.logged} />}/>
            <Route path="*" element={<PrivateRoute isAuthenticated={user.logged}/>}/>
        </Routes>
        </div>
    </Router>
)
}
