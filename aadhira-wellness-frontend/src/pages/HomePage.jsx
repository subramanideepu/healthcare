import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QuickBookingBar from '../components/QuickBookingBar';
import DoctorProfile from '../components/DoctorProfile';
import StatsStrip from '../components/StatsStrip';
import PainChecker from '../components/PainChecker';
import ClinicalPathway from '../components/ClinicalPathway';
import { getAssetUrl } from '../utils/assetUrl';

export default function HomePage() {
  const navigate = useNavigate();

  const handleQuickSelect = (data) => {
    navigate('/contact', { state: { prefill: data } });
  };

  const previewServices = [
    {
      title: 'Myofascial Release (MFR) Therapy',
      badge: 'Core Specialty',
      image: getAssetUrl('assets/images/physio-treatment.jpg'),
      desc: "Dr. Santhosh Balaji's specialized hands-on protocol targeting the myofascial matrix, releasing deep muscle tension and chronic trigger points.",
      link: '/services'
    },
    {
      title: 'Electrotherapy, IFT, US & Wax Bath',
      badge: 'Electrotherapy',
      image: getAssetUrl('assets/images/spine-care.jpg'),
      desc: 'Appropriate electrotherapy modalities including Interferential Therapy (IFT), Ultrasound Therapy (US), Deep Heating, Wax Bath, TENS & Muscle Stimulation.',
      link: '/services'
    },
    {
      title: 'Stroke & Neuro Rehabilitation',
      badge: 'Neuro Care',
      image: getAssetUrl('assets/images/clinic-room.jpg'),
      desc: 'Dedicated neurological physiotherapy helping stroke survivors and paralysis patients restore motor control, re-educate balance reflexes, and regain independent mobility.',
      link: '/services'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="section-badge">
                <svg style={{ width: '14px', height: '14px', fill: 'currentColor' }} viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Recover • Rehab • Rejoice
              </div>
              <h1 className="hero-headline">
                Restoring Functional <span className="text-blue">Movement</span> & Everlasting <span className="text-green">Wellness</span>
              </h1>
              <p className="hero-description">
                Aadhira Wellness Physio & Rehab Center, led by <strong>Dr. Santhosh Balaji .K</strong> (BPT MIAP KTP), delivers evidence-based clinical rehabilitation with specialized expertise in <strong>Myofascial Release (MFR) Therapy</strong>, sports injury recovery, stroke rehabilitation, and personalized house visits in Chennai.
              </p>

              <div className="hero-ctas">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Book Assessment (Clinic / House Visit)
                </Link>
                <Link to="/services" className="btn btn-secondary btn-lg">
                  View All 16+ Services
                </Link>
              </div>

              {/* Trust Badges Strip */}
              <div className="hero-badges-strip">
                <div className="trust-badge-item">
                  <div className="trust-badge-icon">
                    <svg style={{ width: '18px', height: '18px', fill: 'currentColor' }} viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="trust-badge-text">
                    MFR Specialized Care
                    <span>Myofascial Trigger Release</span>
                  </div>
                </div>

                <div className="trust-badge-item">
                  <div className="trust-badge-icon">
                    <svg style={{ width: '18px', height: '18px', fill: 'currentColor' }} viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                    </svg>
                  </div>
                  <div className="trust-badge-text">
                    House Visits Available
                    <span>For Immobile & Post-Op Care</span>
                  </div>
                </div>

                <div className="trust-badge-item">
                  <div className="trust-badge-icon">
                    <svg style={{ width: '18px', height: '18px', fill: 'currentColor' }} viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  <div className="trust-badge-text">
                    Evidence-Based Treatment
                    <span>BPT MIAP KTP Certified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <div className="hero-image-card">
                <img src={getAssetUrl('assets/images/hero-clinical.jpg')} alt="Aadhira Wellness Physiotherapy Assessment in Chennai" />
              </div>
              <div className="floating-pill top-right">
                <div className="pill-icon green">
                  <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <div className="pill-content">
                  <h5>98.4% Recovery Rate</h5>
                  <p>Functional mobility restored</p>
                </div>
              </div>

              <div className="floating-pill bottom-left">
                <div className="pill-icon blue">
                  <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="pill-content">
                  <h5>7,000+ Recovered</h5>
                  <p>Patients treated successfully</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Clinical Booking Bar */}
          <QuickBookingBar onQuickSelect={handleQuickSelect} />

          {/* Doctor Profile Card */}
          <DoctorProfile />
        </div>
      </section>

      {/* Clinical Stats */}
      <StatsStrip />

      {/* Services Preview on Home */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Clinical Specialties</div>
            <h2 className="section-title">Specialized Physiotherapy Services</h2>
            <p className="section-subtitle">
              Comprehensive care from hands-on Myofascial Release to electrotherapy and neurological recovery.
            </p>
          </div>

          <div className="services-grid">
            {previewServices.map((svc, idx) => (
              <article className="service-card" key={idx}>
                <div className="service-thumb">
                  <img src={svc.image} alt={svc.title} />
                  <span className="service-badge">{svc.badge}</span>
                </div>
                <div className="service-body">
                  <h3 className="service-title">{svc.title}</h3>
                  <p className="service-description">{svc.desc}</p>
                  <div className="service-footer" style={{ marginTop: 'auto', paddingTop: '16px' }}>
                    <Link to="/services" className="service-link">
                      Learn More
                      <svg style={{ width: '14px', height: '14px', fill: 'currentColor' }} viewBox="0 0 24 24">
                        <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/services" className="btn btn-primary btn-lg">
              View All 16+ Services & Modalities →
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Pain Checker */}
      <PainChecker />

      {/* 4-Stage Recovery Roadmap */}
      <ClinicalPathway />

      {/* Bottom CTA Strip */}
      <section className="section section-navy" style={{ background: 'var(--bg-navy-gradient)', color: '#ffffff', textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '14px' }}>
            Ready to Begin Your Recovery Journey?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '650px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
            Consult directly with Dr. Santhosh Balaji .K (BPT MIAP KTP) at our Kundrathur clinic or request a dedicated home visit across Chennai.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-green btn-lg">
              Book Appointment / House Visit
            </Link>
            <a href="tel:9080309274" className="btn btn-primary btn-lg">
              Call Direct: 90803 09274
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
