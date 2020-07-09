import React from 'react';
import RegisterCard from '../ui/RegisterCard/RegisterCard';

const Login = () => {
  return (
    <div className='container'>
      <div className='py-5 mx-auto'>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-7 pl-5 ml-3'>
            <RegisterCard />
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
