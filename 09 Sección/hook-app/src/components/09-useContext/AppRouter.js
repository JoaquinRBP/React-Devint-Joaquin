import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
    } from "react-router-dom";
import {AboutScreen} from "./AboutScreen";
import {LoginScreen} from "./LoginScreen";
import {HomeScreen}  from "./HomeScreen";
import {NavBar} from "./NavBar";
export const AppRouter = () => {
    //Routes vs Switch
    //Element vs Component
    //Redirect vs NoMatch
return (
    <Router>
        <div>
            <NavBar />
            <div className="container">
            <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/about" element={<AboutScreen />} />
                <Route exact path="/login" element={<LoginScreen />} />
                <Route path='*' element={<main>
                    <h1>ERR 404</h1>
                </main>} />
            </Routes>
            </div>
        </div>
    </Router>
)
}
