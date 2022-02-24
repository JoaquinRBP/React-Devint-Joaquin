import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
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
    </nav>
)
}