import React from 'react';
import NavBar from '../ui/NavBar/Navbar';
import Footer from '../ui/Footer/Footer';
import Login from './Login';

const LoginPage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="mt-3 p-5">
                <Login />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default LoginPage;