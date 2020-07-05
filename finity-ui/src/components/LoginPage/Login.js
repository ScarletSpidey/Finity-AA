import React from 'react';
import TextContent from '../ui/TextContent/TextContent';
import LoginCard from '../ui/LoginCard/LoginCard';
import image from '../../assets/images/login.svg';

const Login = () => {
    return(
        <div className="container">
            <div className="py-4">

                
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <TextContent 
                            img={image}
                            title="Login. Secure. Easy."
                            paragraph="Get Started. This is some sample text meant to fit this space to get an idea of how things will look"
                        />
                    </div>
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <LoginCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login