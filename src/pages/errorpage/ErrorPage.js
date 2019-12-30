import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className='error-page-btn'>
        <Link to='/'>
          <i class='fas fa-chevron-left' /> Home
        </Link>
      </div>
      <div className='error-page-content'>
        <p>
          Sorry, the following search has no results. Please try again later!
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
