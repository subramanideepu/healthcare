import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetUrl';

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
        <Link to="/" className="logo-wrapper" onClick={closeMobile} aria-label="Aadhira Wellness Physio Rehab Center">
          <img src={getAssetUrl('assets/images/logo.png')} alt="Aadhira Wellness Physio Rehab Center" className="site-logo" />
        </Link>

        {/* Navigation Menu with React Router */}
        <nav className={`nav-menu ${mobileOpen ? 'open active' : ''}`} id="navMenu">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
            onClick={closeMobile}
          >
            <span>Home</span>
            <svg className="mobile-chevron" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
            onClick={closeMobile}
          >
            <span>About Us</span>
            <svg className="mobile-chevron" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
            onClick={closeMobile}
          >
            <span>Services</span>
            <svg className="mobile-chevron" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
            onClick={closeMobile}
          >
            <span>Contact Us</span>
            <svg className="mobile-chevron" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </NavLink>

          <Link to="/contact" className="btn btn-primary nav-mobile-cta" onClick={closeMobile}>
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>Book Appointment</span>
          </Link>

          {/* Mobile Drawer Quick Contacts */}
          <div className="mobile-drawer-contact">
            <a href="tel:9080309274" className="mobile-contact-pill" onClick={closeMobile}>
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>Direct Call: <strong>90803 09274</strong></span>
            </a>
            <a 
              href="https://wa.me/919080309274?text=Hello%20Dr.%20Santhosh%20Balaji%2C%20I%20would%20like%20to%20consult%20regarding%20physiotherapy." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-contact-pill whatsapp"
              onClick={closeMobile}
            >
              <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
              <span>WhatsApp with Doctor</span>
            </a>
            <div className="mobile-contact-text">
              📍 Kundrathur Main Road, Moondramkattalai, Chennai<br />
              ⏰ Mon – Sat: 9:00 AM – 9:00 PM
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary header-desktop-cta" onClick={closeMobile}>
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>Book Appointment</span>
          </Link>
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobile}
            aria-label="Toggle Navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
