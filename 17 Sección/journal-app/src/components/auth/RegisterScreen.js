import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { EvalError, removeError} from '../../actions/ui';
import { useSelector } from 'react-redux';
import {startRegisterWithEmailPasswordName} from '../../actions/auth';
export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {loading, msgError} = useSelector( state => state.ui);
    //Dispara un callback
    const [values, handleInputChange] = useForm({
        name: 'Joaquin',
        email: 'joaquin@gmail.com',
        password: '123456',
        password2: '123456'
    })
    const {name, email, password, password2} = values;
    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password,name));
        }
    }
    const isFormValid = () => {
        if(name.trim().length===0){
            dispatch(EvalError('Name is Required'));
            //console.log('Name is Required');
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(EvalError('Email is not valid'));
            //console.log('');
            return false;
        }else if(password !==password2 || password.length<5){
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
        <form onSubmit={handleRegister}>

            {
                msgError &&
                <div className="auth__alert-error">
                {msgError}
            </div>
            }
            <input 
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                value={name}
                onChange={handleInputChange}
            />
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
            <input 
                type="pasword"
                placeholder="Confirm"
                name="password2"
                className="auth__input"
                autoComplete="off"
                value={password2}
                onChange={handleInputChange}
            />
            <button 
                type="submit"
                className="btn btn-primary btn-block mb-5"
                disabled={loading}
            >
                Register
            </button>
            <Link className="link mt-5" to="/auth/login">
                All Ready Register?
            </Link>
        </form>
    </>
)
}
