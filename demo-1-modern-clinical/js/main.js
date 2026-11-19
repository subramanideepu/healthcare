/**
 * Aadhira Wellness Physio • Rehab Center - Chennai
 * Dr. Santhosh Balaji .K (BPT MIAP KTP)
 * Client Interaction Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Pain Scale Range Slider
  const painSlider = document.getElementById('painScaleSlider');
  const painValueDisplay = document.getElementById('painValueDisplay');

  if (painSlider && painValueDisplay) {
    painSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      let label = 'Mild';
      if (val >= 4 && val <= 6) label = 'Moderate';
      else if (val >= 7 && val <= 8) label = 'Severe';
      else if (val >= 9) label = 'Acute / Severe';
      painValueDisplay.textContent = `${val} / 10 (${label})`;
    });
  }

  // Interactive Pain Assessment Tabs
  const assessmentTabs = document.querySelectorAll('.assessment-tab-btn');
  const assessmentPanels = document.querySelectorAll('.assessment-panel');

  assessmentTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      assessmentTabs.forEach(t => t.classList.remove('active'));
      assessmentPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Quick Booking Bar Submissions
  const quickBookingForm = document.getElementById('quickBookingForm');
  if (quickBookingForm) {
    quickBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const condition = document.getElementById('quickCondition').value;
      const date = document.getElementById('quickDate').value;
      const time = document.getElementById('quickTime').value;

      const mainForm = document.getElementById('appointmentForm');
      if (mainForm) {
        const deptSelect = document.getElementById('appointmentDepartment');
        const dateInput = document.getElementById('appointmentDate');
        const timeSelect = document.getElementById('appointmentTime');

        if (deptSelect && condition) deptSelect.value = condition;
        if (dateInput && date) dateInput.value = date;
        if (timeSelect && time) timeSelect.value = time;

        const bookingSection = document.getElementById('appointment');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // Appointment Enquiry Form Submission
  const appointmentForm = document.getElementById('appointmentForm');
  const successModal = document.getElementById('successModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalConfirmBtn = document.getElementById('modalConfirmBtn');
  const modalRefNumber = document.getElementById('modalRefNumber');
  const modalMessage = document.getElementById('modalMessage');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('patientName')?.value || 'Valued Patient';
      const phone = document.getElementById('patientPhone')?.value || '';
      const visitType = document.getElementById('visitType')?.value || 'Clinic Visit';
      const dept = document.getElementById('appointmentDepartment')?.value || 'Physiotherapy';
      const date = document.getElementById('appointmentDate')?.value || 'Selected Date';
      const time = document.getElementById('appointmentTime')?.value || 'Preferred Time';
      const painLevel = document.getElementById('painScaleSlider')?.value || '5';
      const notes = document.getElementById('patientNotes')?.value || '';

      // Generate Reference Code
      const randomRef = 'ADH-' + Math.floor(100000 + Math.random() * 900000);
      if (modalRefNumber) modalRefNumber.textContent = randomRef;
      if (modalMessage) {
        modalMessage.innerHTML = `Thank you, <strong>${name}</strong>. Your request for <strong>${dept} (${visitType})</strong> on <strong>${date}</strong> has been logged. Dr. Santhosh Balaji .K and our clinical team will contact you at <strong>${phone}</strong> on WhatsApp / Phone to confirm your appointment time.`;
      }

      if (successModal) {
        successModal.classList.add('active');
      }

      // Also trigger direct WhatsApp sync option if on mobile
      const whatsappText = `Hello Dr. Santhosh Balaji, I have requested an appointment at Aadhira Wellness.\nRef: ${randomRef}\nName: ${name}\nPhone: ${phone}\nType: ${visitType}\nService: ${dept}\nDate: ${date} (${time})\nPain Level: ${painLevel}/10\nNotes: ${notes}`;
      
      // Send directly to simple Email handler (send_mail.php)
      fetch('send_mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reference_id: randomRef,
          patient_name: name,
          patient_phone: phone,
          visit_type: visitType,
          department: dept,
          preferred_date: date,
          preferred_time: time,
          pain_level: painLevel,
          medical_history: notes
        })
      }).catch(err => {
        // Fallback for root path
        fetch('../send_mail.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            reference_id: randomRef,
            patient_name: name,
            patient_phone: phone,
            visit_type: visitType,
            department: dept,
            preferred_date: date,
            preferred_time: time,
            pain_level: painLevel,
            medical_history: notes
          })
        }).catch(e => console.warn('Mail send notice:', e));
      });

      appointmentForm.reset();
      if (painValueDisplay) painValueDisplay.textContent = '5 / 10 (Moderate)';
    });
  }

  // Close Modal Handlers
  if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }

  if (modalConfirmBtn && successModal) {
    modalConfirmBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }

  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
      }
    });
  }

  // Pre-fill WhatsApp message trigger for Dr. Santhosh Balaji
  window.sendWhatsAppInquiry = (serviceName = '') => {
    const phone = '919080309274';
    let text = 'Hello Dr. Santhosh Balaji, I would like to enquire about clinical physiotherapy / house visit at Aadhira Wellness.';
    if (serviceName) {
      text = `Hello Dr. Santhosh Balaji, I am interested in booking an assessment for: ${serviceName}. Please share available slots.`;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
});
