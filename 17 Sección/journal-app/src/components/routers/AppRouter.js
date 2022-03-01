import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Routes, Route, Link} from "react-router-dom";
import {firebase} from '../../firebase/firebase-config';
import { useDispatch} from 'react-redux';
import { login } from '../../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setCheking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user?.uid){
                dispatch(login(user.uid,user.displayName));
                setIsLoggedIn(true);
            }
            else{
                setIsLoggedIn(false);
            }
            setCheking(false);
        }) //Obtenemos los valores
    },[dispatch, setCheking])
    
    if(checking){
        return (
            <h1>Espere...</h1>
        )
    }
return (
    <Router>
        <div>
        <Routes>
            <Route path="/*" element={<PublicRoute isAuthenticated={isLoggedIn}/>} />
            <Route exact path="/" element={<PrivateRoute isAuthenticated={isLoggedIn}/>} />
        </Routes>
        </div>
    </Router>
)
}
