import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
export const LoginScreen = () => {
    const history = useNavigate();
    const {dispatch} = useContext(AuthContext);
    const lastpath = localStorage.getItem('lastpath') || '/';
    const query = localStorage.getItem('query') || '';
    const handleLogin =()=>{
        dispatch({
            type: types.login,
            payload: {
                name: 'Joaquin'
            }
        });
        if(query===''){
            history(lastpath,{replace: true});            
        }
        else{
            history(lastpath+'?q='+query,{replace: true});
        }
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
