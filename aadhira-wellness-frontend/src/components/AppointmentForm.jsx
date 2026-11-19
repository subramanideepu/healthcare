import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal';

export default function AppointmentForm({ prefillData }) {
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    visitType: 'Clinic Visit (Kundrathur Center)',
    department: 'Myofascial Release (MFR) Therapy',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 1:00 PM)',
    painLevel: 5,
    medicalHistory: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [lastSubmitted, setLastSubmitted] = useState(null);

  // Sync prefill from QuickBookingBar if updated
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        department: prefillData.condition || prev.department,
        preferredDate: prefillData.date || prev.preferredDate,
        preferredTime: prefillData.time || prev.preferredTime,
      }));
    }
  }, [prefillData]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setFormData(prev => ({
      ...prev,
      preferredDate: prev.preferredDate || `${yyyy}-${mm}-${dd}`
    }));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const getPainDescriptor = (val) => {
    const num = Number(val);
    if (num <= 2) return `${num} / 10 (Mild Discomfort)`;
    if (num <= 4) return `${num} / 10 (Noticeable Ache)`;
    if (num <= 6) return `${num} / 10 (Moderate Pain)`;
    if (num <= 8) return `${num} / 10 (Severe Distressing Pain)`;
    return `${num} / 10 (Extreme / Incapacitating)`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const generatedRef = 'ADH-' + Math.floor(100000 + Math.random() * 900000);
    const payload = {
      reference_id: generatedRef,
      patient_name: formData.patientName,
      patient_phone: formData.patientPhone,
      patient_email: formData.patientEmail || null,
      visit_type: formData.visitType,
      department: formData.department,
      preferred_date: formData.preferredDate,
      preferred_time: formData.preferredTime,
      pain_level: Number(formData.painLevel),
      medical_history: formData.medicalHistory || ''
    };

    let confirmedRef = generatedRef;

    try {
      // Send directly to simple Email handler (send_mail.php)
      const mailEndpoint = window.location.origin.includes(':3000') 
        ? 'http://localhost/healthcare_demo_sites/send_mail.php' 
        : 'send_mail.php';

      const response = await fetch(mailEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reference_id) {
          confirmedRef = data.reference_id;
        }
      }
    } catch (err) {
      console.warn('Mail endpoint notice:', err);
    }

    // Persist lead in localStorage backup
    try {
      const existing = JSON.parse(localStorage.getItem('aadhira_leads') || '[]');
      existing.unshift({ ...payload, timestamp: new Date().toISOString() });
      localStorage.setItem('aadhira_leads', JSON.stringify(existing));
    } catch (storageErr) {
      console.error(storageErr);
    }

    setBookingRef(confirmedRef);
    setLastSubmitted({ ...formData, referenceId: confirmedRef });
    setSubmitting(false);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    // Reset form
    setFormData(prev => ({
      ...prev,
      patientName: '',
      patientPhone: '',
      patientEmail: '',
      medicalHistory: '',
      painLevel: 5
    }));
  };

  return (
    <section className="section section-white booking-section" id="appointment">
      <div className="container">
        <div className="booking-card-wrapper">
          {/* Sidebar Info */}
          <div className="booking-sidebar">
            <div>
              <div className="section-badge light">Priority Booking</div>
              <h3 className="sidebar-title">Book Your Assessment</h3>
              <p className="sidebar-desc">
                Schedule your appointment with Dr. Santhosh Balaji .K at our Kundrathur center or request a dedicated house visit.
              </p>

              <div className="sidebar-perks">
                <div className="perk-item">
                  <div className="perk-icon" style={{ width: '24px', height: '24px', minWidth: '24px', borderRadius: '50%', backgroundColor: 'rgba(46, 158, 68, 0.25)', color: '#2e9e44', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg style={{ width: '13px', height: '13px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div className="perk-text">
                    <h6>20-Min Thorough Clinical Evaluation</h6>
                    <p>In-depth joint, muscle, and posture screening</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon" style={{ width: '24px', height: '24px', minWidth: '24px', borderRadius: '50%', backgroundColor: 'rgba(46, 158, 68, 0.25)', color: '#2e9e44', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg style={{ width: '13px', height: '13px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div className="perk-text">
                    <h6>House Visits Available</h6>
                    <p>Convenient home physiotherapy across Chennai</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon" style={{ width: '24px', height: '24px', minWidth: '24px', borderRadius: '50%', backgroundColor: 'rgba(46, 158, 68, 0.25)', color: '#2e9e44', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg style={{ width: '13px', height: '13px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div className="perk-text">
                    <h6>Direct WhatsApp Confirmation</h6>
                    <p>Fast booking confirmation to your mobile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="direct-help-box">
              <h5>Direct Clinic Line:</h5>
              <div className="phone-number">
                <svg style={{ width: '20px', height: '20px', fill: 'var(--clinical-green)' }} viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 90803 09274</span>
              </div>
            </div>
          </div>

          {/* Booking Form Container */}
          <div className="booking-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="patientName">Full Name *</label>
                  <input 
                    type="text" 
                    id="patientName" 
                    className="form-control" 
                    placeholder="e.g. Ramesh Kumar" 
                    value={formData.patientName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="patientPhone">Mobile Number (WhatsApp) *</label>
                  <input 
                    type="tel" 
                    id="patientPhone" 
                    className="form-control" 
                    placeholder="+91 90803 XXXXX" 
                    value={formData.patientPhone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="visitType">Consultation Type *</label>
                  <select 
                    id="visitType" 
                    className="form-control" 
                    value={formData.visitType} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="Clinic Visit (Kundrathur Center)">Clinic Visit (Kundrathur Center)</option>
                    <option value="House Visit (At My Home in Chennai)">House Visit (At My Home in Chennai)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="department">Condition / Service *</label>
                  <select 
                    id="department" 
                    className="form-control" 
                    value={formData.department} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="Myofascial Release (MFR) Therapy">Myofascial Release (MFR) Therapy</option>
                    <option value="Neck & Cervical Stiffness">Neck & Cervical Stiffness</option>
                    <option value="Spine & Lower Back Sciatica">Spine & Lower Back Sciatica</option>
                    <option value="Knee Pain & Osteoarthritis">Knee Pain & Osteoarthritis</option>
                    <option value="Stroke Rehabilitation">Stroke Rehabilitation</option>
                    <option value="Fracture Rehabilitation">Fracture Rehabilitation</option>
                    <option value="Sports Injury & Taping">Sports Injury & Taping</option>
                    <option value="General Physiotherapy & Electrotherapy">General Physiotherapy (IFT / US)</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="preferredDate">Preferred Date *</label>
                  <input 
                    type="date" 
                    id="preferredDate" 
                    className="form-control" 
                    value={formData.preferredDate} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="preferredTime">Preferred Time Window (9AM - 9PM)</label>
                  <select 
                    id="preferredTime" 
                    className="form-control" 
                    value={formData.preferredTime} 
                    onChange={handleChange}
                  >
                    <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Pain Severity Rating */}
              <div className="pain-slider-container">
                <div className="pain-slider-header">
                  <span className="pain-scale-label">Current Pain Severity (1 - 10):</span>
                  <span className="pain-scale-val">{getPainDescriptor(formData.painLevel)}</span>
                </div>
                <input 
                  type="range" 
                  id="painLevel" 
                  className="pain-range-input" 
                  min="1" 
                  max="10" 
                  value={formData.painLevel} 
                  onChange={handleChange} 
                />
                <div className="pain-scale-hints">
                  <span>1 (Mild Discomfort)</span>
                  <span>5 (Noticeable Pain)</span>
                  <span>10 (Severe / Unable to Move)</span>
                </div>
              </div>

              <div className="form-group-full">
                <label className="form-label" htmlFor="medicalHistory">Brief Medical History / Area of Pain / Address (if House Visit)</label>
                <textarea 
                  id="medicalHistory" 
                  className="form-control" 
                  rows="3" 
                  placeholder="Describe your pain, duration, or enter your Chennai area address if booking a house visit..."
                  value={formData.medicalHistory}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={submitting}>
                <svg style={{ width: '18px', height: '18px', fill: 'currentColor' }} viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                {submitting ? 'Submitting Request...' : 'Confirm Clinical Appointment Request'}
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '10px', textAlign: 'center' }}>
                * No advance payment required. Dr. Santhosh Balaji or clinic reception will call or WhatsApp you to confirm.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <BookingModal 
        isOpen={modalOpen} 
        bookingRef={bookingRef} 
        bookingDetails={lastSubmitted} 
        onClose={handleModalClose} 
      />
    </section>
  );
}
