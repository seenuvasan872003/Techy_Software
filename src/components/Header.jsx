// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';


const Header = () => {
  return (
    <header className="header">
      
      <Link to="/"><img src="https://www.softtechgroup.us/img/logo.png" alt="Techy Software Logo" className="logo" /></Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/Services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;


// https://www.softtechgroup.us/