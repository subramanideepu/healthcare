import React from 'react';

export default function BookingModal({ isOpen, bookingRef, bookingDetails, onClose }) {
  if (!isOpen) return null;

  const whatsappText = encodeURIComponent(
    `Hello Dr. Santhosh Balaji,\nI have submitted an appointment request on your website.\n\n` +
    `*Booking Ref:* ${bookingRef}\n` +
    `*Name:* ${bookingDetails?.patientName || ''}\n` +
    `*Phone:* ${bookingDetails?.patientPhone || ''}\n` +
    `*Type:* ${bookingDetails?.visitType || ''}\n` +
    `*Service:* ${bookingDetails?.department || ''}\n` +
    `*Date:* ${bookingDetails?.preferredDate || ''}\n` +
    `*Time:* ${bookingDetails?.preferredTime || ''}\n` +
    `*Pain Level:* ${bookingDetails?.painLevel || 5}/10\n\n` +
    `Please confirm my appointment slot.`
  );

  return (
    <div className="modal-backdrop active" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>

        <div className="modal-icon-success">
          <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>

        <h3 className="modal-title" id="modalTitle">Appointment Request Received!</h3>
        <div className="modal-booking-ref" id="modalRefNumber">{bookingRef}</div>
        
        <p className="modal-message" id="modalMessage">
          Thank you, <strong>{bookingDetails?.patientName}</strong>. Dr. Santhosh Balaji .K and our clinical team have logged your request in our database. We will reach out on WhatsApp / Mobile within 2 hours.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
          <a 
            href={`https://wa.me/919080309274?text=${whatsappText}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-green btn-lg" 
            style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}
          >
            <svg style={{ width: '18px', height: '18px', fill: 'currentColor' }} viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
            </svg>
            Send Details to Doctor on WhatsApp
          </a>

          <button className="btn btn-primary btn-lg" onClick={onClose} style={{ width: '100%' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
