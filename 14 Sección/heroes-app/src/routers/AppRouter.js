import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
return (
    <Router>
        <div>
        <Routes>
            <Route exact path="/login" element={<LoginScreen />}/>
            <Route path="*" element={<DashboardRoutes />}/>

        </Routes>
        </div>
    </Router>
)
}
