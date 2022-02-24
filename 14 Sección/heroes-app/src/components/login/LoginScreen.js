import React from 'react';
import {useNavigate} from 'react-router-dom';
export const LoginScreen = () => {
    const history = useNavigate();
    const handleLogin =()=>{
        history('/',{replace: true});
    }
return (
    <div className="container mt-5">
        <h1>LoginScreen</h1>
        <hr />

        <button 
            className="btn btn-primary"
            onClick={ handleLogin }
        >
            Login
        </button>
    </div>
)
}
