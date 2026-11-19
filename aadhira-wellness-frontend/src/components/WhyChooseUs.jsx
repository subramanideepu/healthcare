import React from 'react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Evidence-Based Treatment',
      desc: 'Clinical protocols backed by modern physical therapy research and proven orthopedic recovery guidelines.',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      )
    },
    {
      title: 'MFR Specialized Chief Physiotherapist',
      desc: 'Direct care from Dr. Santhosh Balaji .K (BPT MIAP KTP), ensuring you receive skilled hands-on treatment.',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      )
    },
    {
      title: 'House Visits Undertaken',
      desc: 'Comfortable in-home physiotherapy sessions for post-stroke, elderly, or severely injured patients across Chennai.',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
      )
    },
    {
      title: 'Comprehensive Equipment',
      desc: 'Equipped with IFT, Ultrasound, Wax Bath, TENS, Deep Heat, Muscle Stimulation, and Kinesiology Taping.',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      )
    }
  ];

  return (
    <section className="section section-subtle" id="why-choose-us">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">The Aadhira Advantage</div>
          <h2 className="section-title">Why Choose Aadhira Wellness</h2>
          <p className="section-subtitle">
            Led by Dr. Santhosh Balaji .K, we combine compassionate care, specialized Myofascial Release expertise, and verified treatment outcomes.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, idx) => (
            <div className="feature-box" key={idx}>
              <div className="feature-icon-wrapper">
                {feat.icon}
              </div>
              <h4>{feat.title}</h4>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
