import React from 'react';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-header'>
      <div className='navbar-logo'>Disney Solo</div>
      <div className='navbar-content'>
        <div className='navbar-pages'>
          <div className='navbar-item'>
            <i className='fas fa-home' /> Home
          </div>
          <div className='navbar-item'>
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
          </div>
        </div>
        <div className='navbar-account'>Profile</div>
      </div>
    </div>
  );
};

export default Navbar;
