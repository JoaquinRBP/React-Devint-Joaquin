import React from 'react'
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Routes, Route, Link} from "react-router-dom";
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {
return (
    <Router>
        <div>
        <Routes>
            <Route path="/*" element={<AuthRouter />} />
            <Route exact path="/" element={<JournalScreen />} />
        </Routes>
        </div>
    </Router>
)
}
