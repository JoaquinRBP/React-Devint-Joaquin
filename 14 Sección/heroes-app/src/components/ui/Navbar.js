import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    const {user: {name},dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = ()=>{
        dispatch({
            type: types.logout,
        })
        navigate('/login',{replace: true});
    }
return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to='/' className='navbar-brand'>14 Sección</Link>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
                <NavLink exact="true" activeclassname='active' to="./" className='nav-item nav-link'>Home</NavLink>
                <NavLink exact="true" activeclassname='active' to="./marvel" className='nav-item nav-link'>Marvel</NavLink>
                <NavLink exact="true" activeclassname='active' to="./dc" className='nav-item nav-link'>Dc</NavLink>
                <NavLink exact="true" activeclassname='active' to="./search" className='nav-item nav-link'>Search</NavLink>
            </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
                <p className="nav-item nav-link text-info">
                    {name}
                </p>
                <button className='nav-item nav-link btn' onClick={handleLogout}>Logout</button>
            </ul>
        </div>
    </nav>
)
}