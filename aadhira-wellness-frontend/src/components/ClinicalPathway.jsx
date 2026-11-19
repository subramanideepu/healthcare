import React from 'react';

export default function ClinicalPathway() {
  const steps = [
    {
      num: '01',
      title: '20-Min Clinical Evaluation',
      desc: 'Focused diagnostic assessment of pain triggers, joint mobility restrictions, muscle tension, and functional nerve conduction.'
    },
    {
      num: '02',
      title: 'Myofascial Release & Electrotherapy',
      desc: 'Targeted hands-on MFR combined with IFT, ultrasound, or deep heating to eliminate muscle spasms and release fascial knots.'
    },
    {
      num: '03',
      title: 'Kinetic Exercise & Taping',
      desc: 'Progressive exercise therapy and kinesiology taping restoring muscle firing patterns, posture, and joint stability.'
    },
    {
      num: '04',
      title: 'Rejoice & Relapse Prevention',
      desc: 'Long-term posture habits, home exercises, and diet & nutrition guidance so you can live active, pain-free lives.'
    }
  ];

  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <div className="section-badge green">Clinical Progression</div>
          <h2 className="section-title">Your 4-Stage Recovery Journey</h2>
          <p className="section-subtitle">
            A structured, evidence-based care roadmap designed to transition you from acute pain relief to sustainable, long-term functional mobility.
          </p>
        </div>

        <div className="pathway-grid">
          {steps.map((step, idx) => (
            <div className="pathway-step" key={idx}>
              <div className="step-number">{step.num}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
