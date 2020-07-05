import React from 'react';
import logo from '../../../assets/images/finitylogo.png'
import './NavBar.css';

const NavBar = () => {
    return(

        <div className="py-2 px-5">
            <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand text-white pl-3" href="/">
                <img src={logo} width={50} height={50} className="d-inline-block align-top font-weight-bold" alt loading="lazy" />
                &nbsp;Finity
            </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-5 mt-3 mr-auto">
                    <li className="nav-item active px-2">
                    <a className="nav-link text-white font-weight-bold h5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item px-2">
                    <a className="nav-link text-white font-weight-bold h5" href="#">About</a>
                    </li>
                </ul>
                    
                    <a className="btn btn-tertiary my-2 my-sm-0 px-4 py-2" type="submit">Register</a>
                </div>
            </nav>
        </div>
  
    );
};

export default NavBar;