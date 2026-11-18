/**
 * Adhira Wellness - Demo 2: Natural Wellness
 * Calm & Welcoming Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-toggle-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Healing Session Booking Form Submission
  const wellnessForm = document.getElementById('wellnessEnquiryForm');
  const wellnessModal = document.getElementById('wellnessModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalConfirmBtn = document.getElementById('modalConfirmBtn');
  const modalRef = document.getElementById('wellnessModalRef');
  const modalMessage = document.getElementById('wellnessModalMessage');

  if (wellnessForm) {
    wellnessForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('guestName')?.value || 'Friend';
      const focus = document.getElementById('guestFocus')?.value || 'Holistic Wellness';
      const day = document.getElementById('guestDay')?.value || 'your chosen day';
      const time = document.getElementById('guestTime')?.value || 'your preferred time';

      const refNumber = 'WELLNESS-' + Math.floor(10000 + Math.random() * 90000);
      if (modalRef) modalRef.textContent = refNumber;
      if (modalMessage) {
        modalMessage.innerHTML = `Welcome to Adhira Wellness, <strong>${name}</strong>. Your sanctuary reservation for <strong>${focus}</strong> on <strong>${day} (${time})</strong> has been received. Our wellness coordinator will reach out shortly to ensure your healing session is tranquil and tailored to your comfort.`;
      }

      if (wellnessModal) {
        wellnessModal.classList.add('active');
      }

      wellnessForm.reset();
    });
  }

  if (modalCloseBtn && wellnessModal) {
    modalCloseBtn.addEventListener('click', () => {
      wellnessModal.classList.remove('active');
    });
  }

  if (modalConfirmBtn && wellnessModal) {
    modalConfirmBtn.addEventListener('click', () => {
      wellnessModal.classList.remove('active');
    });
  }

  if (wellnessModal) {
    wellnessModal.addEventListener('click', (e) => {
      if (e.target === wellnessModal) {
        wellnessModal.classList.remove('active');
      }
    });
  }

  // WhatsApp Enquiry Helper
  window.sendWhatsAppWellness = (serviceName = '') => {
    const phone = '919876543210';
    let msg = 'Hello Adhira Wellness Sanctuary, I would like to enquire about holistic physiotherapy and restorative care.';
    if (serviceName) {
      msg = `Hello Adhira Wellness Sanctuary, I would like to schedule a calming session for: ${serviceName}. Please share available timings.`;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };
});
