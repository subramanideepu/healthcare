import React from 'react';

export default function LocationMap() {
  return (
    <section className="section section-subtle" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Clinic Location & Contact</div>
          <h2 className="section-title">Visit Aadhira Wellness</h2>
          <p className="section-subtitle">
            Conveniently located on Kundrathur Main Road near Prathap Palace in Chennai. Easy ground floor access and parking.
          </p>
        </div>

        <div className="location-grid">
          {/* Location Details Card */}
          <div className="location-info-card">
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-navy)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                Aadhira Wellness Physio • Rehab Center
              </h3>

              <div className="contact-detail-group">
                <div className="contact-detail-item">
                  <div className="contact-icon-bubble">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div className="contact-text-content">
                    <h6>Clinic Address</h6>
                    <p>No.34 Mookambikai Nagar, Moondramkattalai, Kundrathur Main Road, Chennai - 600128 (Near Prathap Palace)</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-bubble">
                    <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div className="contact-text-content">
                    <h6>Direct Mobile & WhatsApp</h6>
                    <p><a href="tel:9080309274">+91 90803 09274</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-bubble">
                    <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <div className="contact-text-content">
                    <h6>Chief Physiotherapist</h6>
                    <p>Dr. Santhosh Balaji .K, BPT MIAP KTP (Reg. No: L-53036)</p>
                  </div>
                </div>
              </div>

              {/* Operating Timings */}
              <div className="timings-badge-list">
                <div className="timing-row">
                  <span className="timing-day">Monday – Saturday</span>
                  <span className="timing-hours">9:00 AM – 9:00 PM</span>
                </div>
                <div className="timing-row">
                  <span className="timing-day">Sunday</span>
                  <span className="timing-hours">House Visits & Appointments Only</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/919080309274?text=Hello%20Dr.%20Santhosh%20Balaji%2C%20I%20would%20like%20to%20get%20directions%20to%20Aadhira%20Wellness." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-green btn-sm" 
                style={{ flex: 1, textDecoration: 'none', justifyContent: 'center' }}
              >
                <svg style={{ width: '16px', height: '16px', fill: 'currentColor' }} viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
                </svg>
                WhatsApp Directions
              </a>
              <a href="#appointment" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                Book Appointment
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="map-container">
            <div className="map-card-overlay">
              <h5>Aadhira Wellness Physio Center</h5>
              <p>Kundrathur Main Road (Near Prathap Palace), Moondramkattalai, Chennai - 600128</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Kundrathur+Main+Road+Moondramkattalai+Chennai+600128" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Open in Google Maps
              </a>
            </div>
            <iframe 
              className="map-interactive-view"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.46781989025!2d80.0886584287893!3d12.988081692298918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526038166c43c7%3A0x88c422c54ce558a7!2sKundrathur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Aadhira Wellness Physio Center Kundrathur Chennai Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
