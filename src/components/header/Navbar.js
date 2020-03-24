import React from 'react';
import { Link } from 'react-router-dom';

import DisneySolo from '../../img/DisneySolo.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-header'>
      <div className='navbar-logo'>
        <Link to='/' className='navbar-item'>
          <img
            src={DisneySolo}
            alt='logo'
            style={{ height: '100px', width: '100px', overflow: 'hidden' }}
          />
        </Link>
      </div>
      <div className='navbar-content'>
        <div className='navbar-pages'>
          <Link to='/' className='navbar-item'>
            <i className='fas fa-home' />{' '}
            <span className='underline'>Home </span>
          </Link>
          <Link to='/search' className='navbar-item'>
            <i className='fas fa-search' />{' '}
            <span className='underline'>Search </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
