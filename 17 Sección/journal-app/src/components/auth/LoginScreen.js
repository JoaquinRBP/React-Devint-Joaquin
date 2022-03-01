import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from '../../hooks/useForm';
import {useDispatch} from 'react-redux';
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { EvalError, removeError } from '../../actions/ui';
import { useSelector } from 'react-redux';
export const LoginScreen = () => {
    //useDispatch -- hook
    const dispatch =useDispatch();
    const [values, handleInputChange] = useForm({
        email:'joaquin@gmail.com',
        password:123456
    });
    const {loading} = useSelector( state => state.ui);
    const {email, password} = values;
    const handleLogin = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startLoginEmailPassword(email,password));
        }
    }
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        dispatch(startGoogleLogin());
    }
    const isFormValid = () => {
        if(!validator.isEmail(email)){
            dispatch(EvalError('Email is not valid'));
            //console.log('');
            return false;
        }else if(password.length<5){
            dispatch(EvalError('Password is not valid'));
            //console.log('Password is not valid');
            return false;
        }
            dispatch(removeError());
        return true;
    }
return (
    <>
        <h3 className="auth__title">LoginScreen</h3>
        <form 
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleLogin}>
            <input 
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                value={email}
                onChange={handleInputChange}
            />
            <input 
                type="pasword"
                placeholder="Password"
                name="password"
                className="auth__input"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
            />
            <button 
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
            >
                Login
            </button>
            <div className="auth__social-networks">
                <p>Login with Social Networks</p>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                    </div>
            </div>
            <Link className="link" to="/auth/register">
                Create a new account
            </Link>
        </form>
    </>
)
}
