import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-3 pb-3 footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <div className='pr-lg-5'>
              <h1 className='heading h6 text-uppercase font-weight-700 mb-3'>
                <strong>Finity</strong>
              </h1>
            </div>
          </div>
          <div className='col-6 col-md'>
            <h5 className='heading h6 text-uppercase font-weight-700 mb-3'>
              Features
            </h5>
            <ul className='list-unstyled text-small'>
              <li>
                <a className='text-muted' href='/'>
                  Cool stuff
                </a>
              </li>
              <li>
                <a className='text-muted' href='/'>
                  Random feature
                </a>
              </li>
              <li>
                <a className='text-muted' href='/'>
                  Team feature
                </a>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md'>
            <h5 className='heading h6 text-uppercase font-weight-700 mb-3'>
              Resources
            </h5>
            <ul className='list-unstyled text-small'>
              <li>
                <a className='text-muted' href='/'>
                  Business
                </a>
              </li>
              <li>
                <a className='text-muted' href='/'>
                  Education
                </a>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md'>
            <h5 className='heading h6 text-uppercase font-weight-700 mb-3'>
              About
            </h5>
            <ul className='list-unstyled text-small'>
              <li>
                <a className='text-muted' href='/'>
                  Team
                </a>
              </li>
              <li>
                <a className='text-muted' href='/'>
                  Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='d-flex align-items-center'>
          <span className>
            © 2020{' '}
            <a href='/' className='footer-link' target='_blank'>
              Finity
            </a>
            . All rights reserved.
          </span>
          <ul className='nav ml-lg-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='https://github.com/'>
                <i className='fab fa-github' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
