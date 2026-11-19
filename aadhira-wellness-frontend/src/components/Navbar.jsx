import React, { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(prev => !prev);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo-wrapper" aria-label="Aadhira Wellness Physio Rehab Center">
          <img src="/assets/images/logo.png" alt="Aadhira Wellness Physio Rehab Center" className="site-logo" />
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileOpen ? 'active' : ''}`} id="navMenu">
          <a href="#home" className="nav-link active" onClick={closeMobile}>Home</a>
          <a href="#doctor" className="nav-link" onClick={closeMobile}>Doctor Profile</a>
          <a href="#assessment" className="nav-link" onClick={closeMobile}>Pain Checker</a>
          <a href="#services" className="nav-link" onClick={closeMobile}>Our Services</a>
          <a href="#about" className="nav-link" onClick={closeMobile}>About Us</a>
          <a href="#why-choose-us" className="nav-link" onClick={closeMobile}>Why Choose Us</a>
          <a href="#contact" className="nav-link" onClick={closeMobile}>Contact</a>
        </nav>

        <div className="header-actions">
          <a href="#appointment" className="btn btn-primary">
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>Book Appointment</span>
          </a>
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
