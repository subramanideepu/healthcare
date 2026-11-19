import React from 'react';
import { useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import LocationMap from '../components/LocationMap';
import AppointmentForm from '../components/AppointmentForm';

export default function ContactPage() {
  const location = useLocation();
  const prefill = location.state?.prefill || null;

  return (
    <div>
      <PageBanner 
        title="Contact Us & Clinic Location" 
        subtitle="Visit Aadhira Wellness on Kundrathur Main Road, Chennai or request a dedicated House Visit to your home."
        breadcrumb="Contact Us"
      />

      {/* Priority Booking / Contact Form with Email Integration */}
      <AppointmentForm prefillData={prefill} />

      {/* Google Map & Clinic Address */}
      <LocationMap />
    </div>
  );
}
