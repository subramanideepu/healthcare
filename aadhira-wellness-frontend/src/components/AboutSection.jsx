import React from 'react';

export default function AboutSection() {
  return (
    <section className="section section-white" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media">
            <div className="about-main-img">
              <img src="/assets/images/clinic-room.jpg" alt="Aadhira Wellness Physio Rehab Center Chennai" />
            </div>
            <div className="about-overlay-card">
              <h4>Recover • Rehab • Rejoice</h4>
              <p>Every session is governed by objective biometric measurement and documented patient milestones.</p>
            </div>
          </div>

          <div className="about-content">
            <div className="section-badge green">About Aadhira Wellness</div>
            <h2 className="section-title">Restoring Pain-Free Mobility Through Clinical Biomechanics</h2>
            <p className="about-lead">
              AADHIRA WELLNESS: Recover • Rehab • Rejoice
            </p>
            <p className="about-text">
              At Aadhira Wellness, we reject superficial symptom masking. Our clinical physiotherapy team, under Dr. Santhosh Balaji .K, applies comprehensive biomechanical diagnostics to locate the root biomechanical fault — whether it stems from muscular imbalance, joint <strong>mobility</strong> restrictions, or neural compression.
            </p>

            <div className="about-pillars">
              <div className="pillar-box">
                <h5>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Myofascial Release (MFR)
                </h5>
                <p>Specialized soft tissue release for chronic muscle spasms and deep pain.</p>
              </div>

              <div className="pillar-box">
                <h5>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  1-on-1 Dedicated Time
                </h5>
                <p>Direct hands-on treatment with licensed clinical physiotherapists.</p>
              </div>

              <div className="pillar-box">
                <h5>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Appropriate Electrotherapy
                </h5>
                <p>IFT, Ultrasound (US), Wax Bath, TENS & Muscle Stimulation.</p>
              </div>

              <div className="pillar-box">
                <h5>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  House Visits Available
                </h5>
                <p>Comfortable home physiotherapy care for patients across Chennai.</p>
              </div>
            </div>

            <a href="#appointment" className="btn btn-primary">
              Schedule Clinical Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
