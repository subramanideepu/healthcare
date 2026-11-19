import React from 'react';

export default function ServicesGrid() {
  const services = [
    {
      title: 'Myofascial Release (MFR) & Manual Therapy',
      badge: 'Core Specialty',
      image: '/assets/images/physio-treatment.jpg',
      desc: "Dr. Santhosh Balaji's specialized hands-on protocol targeting the myofascial matrix, releasing deep muscle tension and chronic trigger points.",
      features: [
        'PAIN & STIFFNESS REDUCTION & JOINT MOBILIZATION',
        'Therapeutic Massage & Soft Tissue Release',
        'Foot & Segmental Physical Therapy'
      ],
      duration: '20 – 45 Min Focused',
      cta: 'Book MFR'
    },
    {
      title: 'Electrotherapy, IFT, US & Wax Bath',
      badge: 'Electrotherapy',
      image: '/assets/images/spine-care.jpg',
      desc: 'Appropriate electrotherapy modalities including Interferential Therapy (IFT), Ultrasound Therapy (US), Deep Heating, Wax Bath, TENS & Muscle Stimulation.',
      features: [
        'Interferential Therapy (IFT) & Ultrasound (US)',
        'Deep Heating, Wax Bath, TENS & Stimulation'
      ],
      duration: 'Targeted Modality Protocol',
      cta: 'Book Modality'
    },
    {
      title: 'Stroke & Neuro Rehabilitation',
      badge: 'Neuro Care',
      image: '/assets/images/clinic-room.jpg',
      desc: 'Dedicated neurological physiotherapy helping stroke survivors and paralysis patients restore motor control, re-educate balance reflexes, and regain independent mobility.',
      features: [
        'Neuro Rehabilitation & Motor Re-Education',
        'Gait Training & Muscle Re-Activation'
      ],
      duration: 'Comprehensive Sessions',
      cta: 'Book Neuro Care'
    },
    {
      title: 'Fracture Rehabilitation & Joint Recovery',
      badge: 'Orthopedic',
      image: '/assets/images/joint-mobility.jpg',
      desc: 'Structured progressive therapy following cast removal, surgical implants, and fractures. Eliminating joint contractures and rebuilding load-bearing bone and muscle strength.',
      features: [
        'Post-Cast Joint Mobilization',
        'Foot & Segmental Physical Therapy'
      ],
      duration: 'Phased Milestones',
      cta: 'Book Fracture Care'
    },
    {
      title: 'Sports Rehabilitation & Taping',
      badge: 'Sports & Athletic',
      image: '/assets/images/sports-rehab.jpg',
      desc: "Athletic injury recovery for ligament tears, muscle sprains, tennis elbow, and runner's knee incorporating functional kinesiology taping and agility drills.",
      features: [
        'Sports Injury Recovery & Return-to-Play',
        'Kinesiology Taping (KTP Certified)'
      ],
      duration: 'Sport-Specific Training',
      cta: 'Book Sports Care'
    },
    {
      title: 'House Visits & Home Physiotherapy',
      badge: 'House Visits',
      badgeBg: '#2e9e44',
      image: '/assets/images/geriatric-care.jpg',
      desc: 'Cannot travel to our clinic? Dr. Santhosh Balaji and our team provide dedicated house visits across Chennai for bedridden, elderly, and post-operative patients.',
      features: [
        'House Visits Undertaken at Your Home',
        'Mobility Training, Diet & Nutrition Advice'
      ],
      duration: 'Home Consultation Available',
      cta: 'Book House Visit'
    }
  ];

  return (
    <section className="section section-subtle" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Comprehensive Clinical Specialties</div>
          <h2 className="section-title">Evidence-Based Physiotherapy Services</h2>
          <p className="section-subtitle">
            All treatments listed on our official clinic services roster — from advanced electrotherapy and manual Myofascial Release to home visits.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc, idx) => (
            <article className="service-card" key={idx}>
              <div className="service-thumb">
                <img src={svc.image} alt={svc.title} />
                <span className="service-badge" style={svc.badgeBg ? { background: svc.badgeBg } : {}}>
                  {svc.badge}
                </span>
              </div>
              <div className="service-body">
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-description">{svc.desc}</p>
                <div className="service-features">
                  {svc.features.map((feat, fIdx) => (
                    <div className="service-feature-item" key={fIdx}>
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="service-footer">
                  <span className="service-duration">{svc.duration}</span>
                  <a href="#appointment" className="service-link">
                    {svc.cta}
                    <svg style={{ width: '14px', height: '14px', fill: 'currentColor' }} viewBox="0 0 24 24">
                      <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
