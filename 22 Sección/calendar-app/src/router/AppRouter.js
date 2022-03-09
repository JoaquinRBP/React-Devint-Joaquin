import React from 'react'
import { BrowserRouter as Router,
    Routes,
    Route, } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
return (
    <Router>
        <Routes>
            <Route exact="true" path='/login' element={<LoginScreen />}/>
            <Route exact="true" path='/' element={<CalendarScreen />}/>
        </Routes>
    </Router>
)
}
