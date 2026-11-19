import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage() {
  return (
    <div>
      <PageBanner 
        title="About Aadhira Wellness" 
        subtitle="AADHIRA WELLNESS: Recover • Rehab • Rejoice — Led by Chief Physiotherapist Dr. Santhosh Balaji .K (BPT MIAP KTP)."
        breadcrumb="About Us"
      />

      {/* Main Clinical Philosophy */}
      <AboutSection />

      {/* Chief Physiotherapist Dedicated Feature */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Leadership & Expertise</div>
            <h2 className="section-title">Chief Physiotherapist Profile</h2>
            <p className="section-subtitle">
              Experienced clinical care dedicated to diagnosing and treating root causes of musculoskeletal and neuromuscular conditions.
            </p>
          </div>

          <div className="about-doctor-card">
            <div className="about-doctor-header">
              <div className="doctor-avatar-badge" style={{ width: '84px', height: '84px', fontSize: '1.75rem' }}>SB</div>
              <div>
                <span className="doctor-specialty-tag" style={{ marginBottom: '6px' }}>Chief Physiotherapist & MFR Specialist</span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)', fontWeight: 800 }}>DR. SANTHOSH BALAJI .K</h3>
                <div style={{ color: 'var(--clinical-blue)', fontWeight: 700, fontSize: '0.95rem' }}>
                  BPT MIAP KTP (Registration No: L-53036)
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
              Dr. Santhosh Balaji .K is an accomplished clinical physiotherapist certified by the Indian Association of Physiotherapists (MIAP) and Kinesiology Taping Practitioner (KTP). With <strong>8+ years of clinical excellence</strong> and over <strong>7,000+ successful patient rehabilitations</strong>, he specializes in <strong>Myofascial Release (MFR) Therapy</strong>, restoring functional mobility for chronic joint and spine conditions, post-stroke recovery, and fracture care.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              Recognizing that patients with severe pain or mobility constraints cannot always travel to the clinic, Dr. Santhosh Balaji also provides dedicated <strong>House Visits</strong> across Chennai, bringing clinical expertise and portable electrotherapy modalities right to patients' homes.
            </p>

            <div className="about-doctor-actions">
              <Link to="/contact" className="btn btn-primary">
                Book Consultation with Doctor
              </Link>
              <a 
                href="https://wa.me/919080309274?text=Hello%20Dr.%20Santhosh%20Balaji%2C%20I%20would%20like%20to%20consult%20regarding%20physiotherapy." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-green"
              >
                WhatsApp Consultation
              </a>
              <a href="tel:9080309274" className="btn btn-secondary">
                Direct Call: 90803 09274
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Aadhira Advantages */}
      <WhyChooseUs />

      {/* Ready Banner */}
      <section style={{ background: 'var(--bg-navy-gradient)', color: '#ffffff', textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', marginBottom: '12px' }}>
            Schedule Your Thorough 20-Min Clinical Evaluation
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 24px auto' }}>
            Let us help you eliminate pain and regain pain-free functional movement.
          </p>
          <Link to="/contact" className="btn btn-green btn-lg">
            Book Appointment / House Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
