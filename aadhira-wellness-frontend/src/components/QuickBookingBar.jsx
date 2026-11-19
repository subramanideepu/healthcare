import React, { useState } from 'react';

export default function QuickBookingBar({ onQuickSelect }) {
  const [condition, setCondition] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (9:00 AM - 1:00 PM)');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onQuickSelect) {
      onQuickSelect({ condition, date, time });
    }
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="quick-booking-bar">
      <form className="quick-booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="quickCondition">
            <svg style={{ width: '14px', height: '14px', fill: 'var(--clinical-blue)' }} viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            Clinical Specialty / Need
          </label>
          <select 
            className="form-control" 
            id="quickCondition" 
            value={condition} 
            onChange={(e) => setCondition(e.target.value)} 
            required
          >
            <option value="" disabled>Select Your Concern</option>
            <option value="Myofascial Release (MFR) Therapy">Myofascial Release (MFR) Therapy</option>
            <option value="Spine, Neck & Joint Pain">Spine, Neck & Joint Pain</option>
            <option value="Sports Injury & Athletic Recovery">Sports Injury & Athletic Recovery</option>
            <option value="Stroke & Neuro Rehabilitation">Stroke & Neuro Rehabilitation</option>
            <option value="Fracture Rehabilitation">Fracture Rehabilitation</option>
            <option value="House Visit Consultation">House Visit Consultation (Chennai)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="quickDate">
            <svg style={{ width: '14px', height: '14px', fill: 'var(--clinical-blue)' }} viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
            </svg>
            Preferred Date
          </label>
          <input 
            type="date" 
            className="form-control" 
            id="quickDate" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="quickTime">
            <svg style={{ width: '14px', height: '14px', fill: 'var(--clinical-blue)' }} viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            Time Window (9:00 AM – 9:00 PM)
          </label>
          <select 
            className="form-control" 
            id="quickTime" 
            value={time} 
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
            <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
            <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
          </select>
        </div>

        <button type="submit" className="btn btn-green" style={{ height: '44px' }}>
          Reserve Slot
        </button>
      </form>
    </div>
  );
}
