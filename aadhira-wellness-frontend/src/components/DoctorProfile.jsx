import React from 'react';

export default function DoctorProfile() {
  return (
    <div className="doctor-profile-card" id="doctor">
      <div className="doctor-avatar-badge">SB</div>
      <div className="doctor-info-text">
        <div className="doctor-specialty-tag">Chief Physiotherapist & MFR Specialist</div>
        <h3>DR. SANTHOSH BALAJI .K</h3>
        <div className="doctor-credentials">BPT MIAP KTP Chief Physiotherapist (Reg. No: L-53036)</div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '12px' }}>
          Specialized in <strong>Myofascial Release (MFR) Therapy</strong>, musculoskeletal pain relief, stroke re-education, fracture rehabilitation, and individualized exercise recovery. Also providing specialized home visit care for patients with mobility limitations across Chennai.
        </p>
        <div className="doctor-actions">
          <a href="tel:9080309274" className="btn btn-primary btn-sm">
            <svg style={{ width: '14px', height: '14px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Dr. Santhosh Balaji: 90803 09274
          </a>
          <a 
            href="https://wa.me/919080309274?text=Hello%20Dr.%20Santhosh%20Balaji%2C%20I%20would%20like%20to%20consult%20regarding%20physiotherapy%20treatment." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-green btn-sm"
          >
            WhatsApp Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
