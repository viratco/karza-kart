import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="EarthyColor Logo" className="logo-image" />
      </div>

      <ul className="navbar-links">
        <li><a href="#" className="nav-link active">Home</a></li>
        <li><a href="#" className="nav-link">Apply</a></li>
        <li><a href="#" className="nav-link">Video Gallery</a></li>
        <li><a href="#" className="nav-link">Blogs</a></li>
        <li><a href="#" className="nav-link">Contact</a></li>
      </ul>

      <button className="login-btn">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
