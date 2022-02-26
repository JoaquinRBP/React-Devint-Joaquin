import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
return (
    <>
        <h3 className="auth__title">LoginScreen</h3>
        <form>
            <input 
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
            />
            <input 
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
            />
            <input 
                type="pasword"
                placeholder="Password"
                name="password"
                className="auth__input"
                autoComplete="off"
            />
            <input 
                type="pasword"
                placeholder="Confirm"
                name="password2"
                className="auth__input"
                autoComplete="off"
            />
            <button 
                type="submit"
                className="btn btn-primary btn-block mb-5"
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
