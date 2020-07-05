import React from 'react';
import logo from '../../../assets/images/finitylogo.png'
import './NavBar.css';

const NavBar = () => {
    return(

        <div>
            <nav className="navbar">
                <a className="navbar-brand text-light font-weight-bold py-3 pl-4" href="/">
                    <img src={logo} width={50} height={50} className="d-inline-block align-top" alt="logo" />
                    &nbsp;&nbsp; Finity
                </a>
            </nav>
        </div>
    
    );
};

export default NavBar;