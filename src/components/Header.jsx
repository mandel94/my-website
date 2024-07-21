import React from 'react';
import Home from './Home';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          {/* <li className="header__nav-item"><a className="header__nav-link" href="/about">About</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/projects">Projects</a></li> */}
          <li className="header__nav-item"><a className="header__nav-link" href="/blog">Blog</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="/contact">Contact</a></li>
          <li className="header__nav-item"><a className="header__nav-link" href="https://www.linkedin.com/in/manuel-de-luzi/">LinkedIn</a></li>
        </ul>
      </nav>
      <Home />
    </header>
  );
};

export default Header;

