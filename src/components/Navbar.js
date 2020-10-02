import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
    return(
        <ul className="navbar">
            <li>
                <a href='#home' className='active'>Home</a> 
            </li>
            <li>
                <a href='#work'>Work</a> 
            </li>
            <li>
                <a href='#skillset'>Skillset</a> 
            </li>
            <li>
                <a href='#bio'>Bio</a> 
            </li>
            <li>
                <a href='#contact'>Contact</a> 
            </li>
        </ul> 
    )
}

export default Navbar;