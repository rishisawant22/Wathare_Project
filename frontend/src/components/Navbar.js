import React from 'react';
import logo from '../components/image.png'; 
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-right">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
