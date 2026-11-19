import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(prev => !prev);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo-wrapper" onClick={closeMobile} aria-label="Aadhira Wellness Physio Rehab Center">
          <img src="/assets/images/logo.png" alt="Aadhira Wellness Physio Rehab Center" className="site-logo" />
        </Link>

        {/* Navigation Menu with React Router */}
        <nav className={`nav-menu ${mobileOpen ? 'active' : ''}`} id="navMenu">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
            onClick={closeMobile}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
            onClick={closeMobile}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
            onClick={closeMobile}
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
            onClick={closeMobile}
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary" onClick={closeMobile}>
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>Book Appointment</span>
          </Link>
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobile}
            aria-label="Toggle Navigation"
          >
            <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
