import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ServicesGrid from '../components/ServicesGrid';
import ClinicalPathway from '../components/ClinicalPathway';
import FAQSection from '../components/FAQSection';

export default function ServicesPage() {
  return (
    <div>
      <PageBanner 
        title="Our Services & Clinical Specialties" 
        subtitle="All 16+ evidence-based treatments from our official clinic services roster — led by Dr. Santhosh Balaji .K (BPT MIAP KTP)."
        breadcrumb="Services"
      />

      {/* Complete Services List */}
      <ServicesGrid />

      {/* 4-Stage Recovery Journey */}
      <ClinicalPathway />

      {/* FAQ on Services */}
      <FAQSection />

      {/* Bottom CTA */}
      <section style={{ background: 'var(--bg-navy-gradient)', color: '#ffffff', textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', marginBottom: '12px' }}>
            Book Your Clinical Assessment or House Visit
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '650px', margin: '0 auto 24px auto' }}>
            Our clinical team in Kundrathur and house visit specialists across Chennai are ready to help you recover.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-green btn-lg">
              Book Appointment Now
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
