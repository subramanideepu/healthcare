import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assetUrl';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Logo & Mission */}
          <div className="footer-col-about">
            <div className="footer-logo-wrap">
              <Link to="/" onClick={scrollToTop}>
                <img src={getAssetUrl('assets/images/logo.png')} alt="Aadhira Wellness Physio Rehab Center Logo" className="footer-logo" />
              </Link>
            </div>
            <p className="footer-bio">
              <strong>AADHIRA WELLNESS: Recover • Rehab • Rejoice</strong><br />
              Led by Dr. Santhosh Balaji .K (BPT MIAP KTP), providing evidence-based physiotherapy, specialized Myofascial Release (MFR) Therapy, stroke & fracture rehabilitation, and house visits in Chennai.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://wa.me/919080309274" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h5>Our Services</h5>
            <ul className="footer-links">
              <li><Link to="/services" onClick={scrollToTop}>Myofascial Release (MFR)</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Interferential Therapy (IFT)</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Ultrasound & Deep Heat</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Wax Bath & TENS</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Stroke Rehabilitation</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Fracture Rehabilitation</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Sports Rehab & Taping</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>House Visits Undertaken</Link></li>
            </ul>
          </div>

          {/* Col 3: Navigation Pages */}
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Our Services</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact Us & Location</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Book Appointment</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="footer-col">
            <h5>Clinic Location</h5>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>No.34 Mookambikai Nagar, Moondramkattalai, Kundrathur Main Road, Chennai 600128 (Near Prathap Palace)</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>Mobile / WhatsApp: <a href="tel:9080309274"><strong>90803 09274</strong></a></span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>Email: <a href="mailto:info@aadhirawellness.com"><strong>info@aadhirawellness.com</strong></a></span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span>Mon – Sat: 9:00 AM – 9:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 Aadhira Wellness Physio • Rehab Center. All rights reserved. Dr. Santhosh Balaji .K (BPT MIAP KTP).
          </div>
          <div>
            <span>Recover • Rehab • Rejoice</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
