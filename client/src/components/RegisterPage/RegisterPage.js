import React from 'react';
import NavBar from '../ui/NavBar/Navbar';
import Footer from '../ui/Footer/Footer';
import Register from './Register';

const RegisterPage = () => {
  return (
    <React.Fragment>
      <NavBar rightbtn='Login' />
      <div className='mt-3 p-5'>
        <Register />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default RegisterPage;
