import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-create-by'>
        Created By: <span className='footer-name'>Vuthy Suon</span>
      </div>
      <div className='footer-source-code'>
        Source Code:{' '}
        <a
          href='https://github.com/Suonx002/DisneySolo'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fab fa-github ' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
