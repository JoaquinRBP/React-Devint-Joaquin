import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import {LoginScreen} from '../auth/LoginScreen';
import {RegisterScreen} from '../auth/RegisterScreen';
export const AuthRouter = () => {
return (
    <div className="auth__main">
        <div className="auth__box-container">
    <Routes>
            <Route exact="true" path="/auth/login" element={<LoginScreen />}/>
            <Route exact="true" path="/auth/register" element={<RegisterScreen />}/>
            <Route path="*" element={<Navigate to="/auth/login"/>}/>
        </Routes>
        </div>
    </div>
)
}
