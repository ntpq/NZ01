import React from "react";

const Header = () => {
  return (
    <header>
      <div className='portfolio-container'>Portfolio.</div>
      <div className='menu-container'>
        <ul className='menu'>
          <li className='menu-items'>Home</li>
          <li className='menu-items'>About</li>
          <li className='menu-items'>Project</li>
          <li className='menu-items'>Contact</li>
        </ul>
      </div>
      <div className='social-container'>
        <a href='#'>
          <img src='./fb-icon.svg' alt='facebook' className='social-media-icon' />
        </a>
        <a href='#'>
          <img src='./ig-icon.svg' alt='instagram' className='social-media-icon' />
        </a>
        <a href='#'>
          <img src='./linkedin-icon.svg' alt='linkedin' className='social-media-icon' />
        </a>
      </div>
    </header>
  );
};

export default Header;
