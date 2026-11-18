/**
 * Adhira Wellness - Demo 1: Modern Clinical
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
        // Close others
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

      // Scroll to full booking form and prefill
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
      const dept = document.getElementById('appointmentDepartment')?.value || 'General Physiotherapy';
      const date = document.getElementById('appointmentDate')?.value || 'Selected Date';

      // Generate Reference Code
      const randomRef = 'ADH-' + Math.floor(100000 + Math.random() * 900000);
      if (modalRefNumber) modalRefNumber.textContent = randomRef;
      if (modalMessage) {
        modalMessage.innerHTML = `Thank you, <strong>${name}</strong>. Your clinical appointment request for <strong>${dept}</strong> on <strong>${date}</strong> has been logged. Our physiotherapy care coordinator will contact you at <strong>${phone}</strong> within 2 hours to confirm your assessment slot.`;
      }

      if (successModal) {
        successModal.classList.add('active');
      }

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

  // Pre-fill WhatsApp message trigger
  window.sendWhatsAppInquiry = (serviceName = '') => {
    const phone = '919876543210';
    let text = 'Hello Adhira Wellness, I would like to enquire about clinical physiotherapy assessment.';
    if (serviceName) {
      text = `Hello Adhira Wellness, I am interested in booking an assessment for: ${serviceName}. Please share available slots.`;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
});
