import React from 'react';
import { NavLink } from 'react-router-dom';

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
           {/*<li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active' to='projects'>Projects</NavLink></li>
    <li><NavLink activeClassName='active' to='skillset'>Skillset</NavLink></li>*/}
        </ul>
        
    )

}

export default Navbar;