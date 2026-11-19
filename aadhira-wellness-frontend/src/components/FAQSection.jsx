import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Myofascial Release (MFR) Therapy and who needs it?',
      a: "Myofascial Release (MFR) is a specialized hands-on therapy that releases restrictions within the tough connective tissues (fascia) wrapping your muscles. If you suffer from chronic neck tightness, fibromyalgia, persistent lower back stiffness, or unresolved sports injuries, Dr. Santhosh Balaji's MFR therapy eliminates deep trigger points and restores pain-free mobility."
    },
    {
      q: 'How do house visits work for home-bound patients?',
      a: 'For elderly individuals, post-stroke recovery, post-fracture patients, or anyone unable to travel to our Kundrathur center, we provide comprehensive home physiotherapy visits across Chennai. We bring portable electrotherapy, IFT, TENS, and exercise equipment right to your bedside.'
    },
    {
      q: 'What happens during the initial 20-minute clinical evaluation?',
      a: 'Dr. Santhosh Balaji performs a targeted physical assessment of your joints, posture, radiating pain vectors, and muscle tightness. You receive your immediate pain relief protocol and a customized milestone recovery plan.'
    },
    {
      q: 'What are your clinic operating hours in Kundrathur?',
      a: 'We are open Monday through Saturday from 9:00 AM to 9:00 PM. Sunday appointments and house visits can be arranged with prior booking.'
    },
    {
      q: 'Do I need to bring MRI or X-ray scans?',
      a: 'If you have recent X-rays, MRI reports, or doctor prescription sheets, please bring them along. However, they are not mandatory; we conduct thorough physical and orthopedic clinical tests during your evaluation.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <div className="section-badge green">Patient Information</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about treatments, Myofascial Release, and house visits at Aadhira Wellness.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div className={`faq-item ${openIndex === idx ? 'active' : ''}`} key={idx}>
              <button 
                type="button" 
                className="faq-question" 
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">
                  <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </span>
              </button>
              {openIndex === idx && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
