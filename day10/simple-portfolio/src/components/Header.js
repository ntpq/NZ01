import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='portfolio-container'>Portfolio.</div>
      <nav className='menu-container'>
        <ul className='menu'>
          <li className='menu-items'><Link to="/">Home</Link></li>
          <li className='menu-items'><Link to="/about">About</Link></li>
          <li className='menu-items'><Link to="/projects">Project</Link></li>
          <li className='menu-items'><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
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
