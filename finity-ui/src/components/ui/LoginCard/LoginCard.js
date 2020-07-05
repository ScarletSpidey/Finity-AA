import React from 'react';

const LoginCard = () => {
    return (
        <div className="card bg-dark">
            <div className="card-body">
                <h4 className="card-title text-center">Login to your Account</h4>
                <form className="py-3">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="YourEmail@Example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password" />
                    </div>
                    <div className="form-group form-check">
                    </div>
                    <div className="pt-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default LoginCard;