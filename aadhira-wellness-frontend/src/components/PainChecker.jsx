import React, { useState } from 'react';

export default function PainChecker() {
  const [activeTab, setActiveTab] = useState('cervicalTab');

  const tabs = [
    { id: 'cervicalTab', label: 'Cervical & Neck' },
    { id: 'mfrTab', label: 'Muscle Recovery (MFR)' },
    { id: 'lumbarTab', label: 'Lumbar & Sciatica' },
    { id: 'kneeTab', label: 'Knee & Joint' },
    { id: 'postopTab', label: 'Fracture & Stroke Rehab' },
  ];

  return (
    <section className="section section-subtle" id="assessment">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Self-Assessment Tool</div>
          <h2 className="section-title">Identify Your Discomfort Zone</h2>
          <p className="section-subtitle">
            Select your affected anatomical area to discover our targeted evidence-based rehabilitation protocols and expected recovery timelines.
          </p>
        </div>

        <div className="assessment-tool">
          <div className="assessment-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`assessment-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel 1: Cervical */}
          {activeTab === 'cervicalTab' && (
            <div className="assessment-panel active" id="cervicalTab">
              <div className="condition-card">
                <div className="condition-visual">
                  <img src="/assets/images/spine-care.jpg" alt="Cervical and Neck Physiotherapy Treatment" />
                </div>
                <div className="condition-info">
                  <h4>Cervical Radiculopathy & Postural Neck Strain</h4>
                  <p>
                    Commonly triggered by prolonged screen time, herniated cervical discs, or poor ergonomics. Our clinical protocol focuses on restoring <strong>THE PROPER POSTURE</strong>, relieving pinched nerves, and strengthening <strong>NECK MUSCLES</strong>.
                  </p>
                  
                  <div className="treatment-highlights">
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Cervical Decompression</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Manual Joint Mobilization</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>RADIATING PAIN REDUCTION</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Ergonomic Posture Rehab</span>
                    </div>
                  </div>

                  <a href="#appointment" className="btn btn-primary btn-sm">Book Cervical Assessment</a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 2: MFR */}
          {activeTab === 'mfrTab' && (
            <div className="assessment-panel active" id="mfrTab">
              <div className="condition-card">
                <div className="condition-visual">
                  <img src="/assets/images/physio-treatment.jpg" alt="Myofascial Release Therapy" />
                </div>
                <div className="condition-info">
                  <h4>Myofascial Release (MFR) Therapy & Muscle Recovery</h4>
                  <p>
                    Specialized hands-on soft tissue therapy by Dr. Santhosh Balaji focusing on releasing fascial tightness, eliminating deep muscle knots, and restoring pain-free muscular flexibility across the body.
                  </p>
                  
                  <div className="treatment-highlights">
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Fascial Restriction Release</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Trigger Point Deactivation</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Muscle Spasm Elimination</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Tissue Rehydration & Recovery</span>
                    </div>
                  </div>

                  <a href="#appointment" className="btn btn-primary btn-sm">Book MFR Assessment</a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 3: Lumbar */}
          {activeTab === 'lumbarTab' && (
            <div className="assessment-panel active" id="lumbarTab">
              <div className="condition-card">
                <div className="condition-visual">
                  <img src="/assets/images/posture-check.jpg" alt="Lumbar Disc and Sciatica Treatment" />
                </div>
                <div className="condition-info">
                  <h4>Lumbar Disc Herniation, Spondylosis & Sciatica</h4>
                  <p>
                    Radiating pain down the leg, numbness, or acute low back spasm. We apply non-surgical spinal decompression combined with targeted core activation to relieve spinal nerve pressure.
                  </p>
                  
                  <div className="treatment-highlights">
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Lumbar Decompression</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Appropriate Electrotherapy (IFT)</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Pelvic-Lumbar Stabilization</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Deep Heating & Wax Therapy</span>
                    </div>
                  </div>

                  <a href="#appointment" className="btn btn-primary btn-sm">Book Spine Assessment</a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 4: Knee */}
          {activeTab === 'kneeTab' && (
            <div className="assessment-panel active" id="kneeTab">
              <div className="condition-card">
                <div className="condition-visual">
                  <img src="/assets/images/sports-rehab.jpg" alt="Knee Osteoarthritis and Patellofemoral Pain" />
                </div>
                <div className="condition-info">
                  <h4>Knee Osteoarthritis, Patellofemoral Pain & Meniscal Tears</h4>
                  <p>
                    Joint grinding, swelling upon stair climbing, and instability. We focus on quad/hamstring co-contraction, joint off-loading, and biomechanical alignment of hip-to-ankle kinetic chains.
                  </p>
                  
                  <div className="treatment-highlights">
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Low-Impact Quadriceps Rehab</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Patellar Glides & Taping</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Proprioception & Balance</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Targeted Kinetic Strengthening</span>
                    </div>
                  </div>

                  <a href="#appointment" className="btn btn-primary btn-sm">Book Knee Assessment</a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 5: Stroke & Fracture */}
          {activeTab === 'postopTab' && (
            <div className="assessment-panel active" id="postopTab">
              <div className="condition-card">
                <div className="condition-visual">
                  <img src="/assets/images/joint-mobility.jpg" alt="Stroke & Fracture Rehabilitation" />
                </div>
                <div className="condition-info">
                  <h4>Stroke & Fracture Post-Cast Rehabilitation</h4>
                  <p>
                    Specialized neurological and post-fracture recovery restoring limb functional capacity, joint mobility, muscle tone, and independent gait. House visits available for patients unable to travel.
                  </p>
                  
                  <div className="treatment-highlights">
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Post-Cast Stiffness Release</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Neuro Muscle Stimulation</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Gait Retraining & Balance Drills</span>
                    </div>
                    <div className="highlight-item">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>House Visit Care at Your Door</span>
                    </div>
                  </div>

                  <a href="#appointment" className="btn btn-primary btn-sm">Book Stroke / Fracture Care</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
