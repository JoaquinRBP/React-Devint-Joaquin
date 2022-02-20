import React, {useContext} from 'react';
import {UserContext} from './UserContext';

export const LoginScreen = () => {
    const {user,setuser} = useContext(UserContext);
    const usuarioLogin ={
        id: 8,
        username: 'Joaquin',
        password: '123456'
    }
return (
    <>
        <h1>LoginScreen</h1>
        <hr />

        <pre>
            {JSON.stringify(user,null, 3)}
        </pre>
        <button 
        className="btn btn-primary"
        onClick={ ()=> setuser(usuarioLogin)}>
            Login
        </button>
    </>
)
}
