import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-header'>
      <div className='navbar-logo'>Disney Solo</div>
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
          <Link to='/' className='navbar-item'>
            <i className='fas fa-plus' />{' '}
            <span className='underline'>Watchlist </span>
          </Link>
          <Link to='/' className='navbar-item'>
            <i className='fas fa-star' />{' '}
            <span className='underline'>Originals </span>
          </Link>
          <Link to='/' className='navbar-item'>
            <i className='fas fa-compact-disc' />{' '}
            <span className='underline'>Movies </span>
          </Link>
          <Link to='/' className='navbar-item'>
            <i className='fas fa-video' />{' '}
            <span className='underline'>Series </span>
          </Link>
          {/* <div className='navbar-item'>

            <i className='fas fa-home' /> Home
          </div> */}
          {/* <div className='navbar-item'>
            <i className='fas fa-search' /> Search
          </div>
          <div className='navbar-item'>
            <i className='fas fa-plus' /> WatchList
          </div>
          <div className='navbar-item'>
            <i className='fas fa-star' /> Originals
          </div>
          <div className='navbar-item'>
            <i className='fas fa-compact-disc' /> Movies
          </div>
          <div className='navbar-item'>
            <i className='fas fa-video' /> Series
          </div> */}
        </div>
        <div className='navbar-account'>Profile</div>
      </div>
    </div>
  );
};

export default Navbar;
