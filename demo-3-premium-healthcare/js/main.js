/**
 * Adhira Wellness - Demo 3: Premium Healthcare
 * Executive Interactions & Concierge Booking
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isExpanded = navLinks.classList.contains('open');
      mobileBtn.setAttribute('aria-expanded', isExpanded);
    });

    navLinks.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Interactive Service Category Filters
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const serviceCards = document.querySelectorAll('.premium-service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // FAQ Accordion
  const faqPanels = document.querySelectorAll('.faq-panel');
  faqPanels.forEach(panel => {
    const btn = panel.querySelector('.faq-header-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = panel.classList.contains('active');
        faqPanels.forEach(p => p.classList.remove('active'));
        if (!isActive) {
          panel.classList.add('active');
        }
      });
    }
  });

  // Priority Concierge Reservation Submission
  const vipForm = document.getElementById('vipReservationForm');
  const vipModal = document.getElementById('vipModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalConfirmBtn = document.getElementById('modalConfirmBtn');
  const vipRefDisplay = document.getElementById('vipRefDisplay');
  const vipMessageDisplay = document.getElementById('vipMessageDisplay');

  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName')?.value || 'Distinguished Client';
      const specialty = document.getElementById('clientSpecialty')?.value || 'Executive Assessment';
      const date = document.getElementById('clientDate')?.value || 'Requested Date';
      const phone = document.getElementById('clientPhone')?.value || '';

      const vipId = 'VIP-ADH-' + Math.floor(100000 + Math.random() * 900000);
      if (vipRefDisplay) vipRefDisplay.textContent = vipId;
      if (vipMessageDisplay) {
        vipMessageDisplay.innerHTML = `Welcome to Adhira Wellness Executive Care, <strong>${name}</strong>. Your priority consultation for <strong>${specialty}</strong> on <strong>${date}</strong> has been logged with our medical concierge. Our senior coordinator will contact you at <strong>${phone}</strong> to confirm your private suite.`;
      }

      if (vipModal) {
        vipModal.classList.add('active');
      }

      vipForm.reset();
    });
  }

  if (modalCloseBtn && vipModal) {
    modalCloseBtn.addEventListener('click', () => {
      vipModal.classList.remove('active');
    });
  }

  if (modalConfirmBtn && vipModal) {
    modalConfirmBtn.addEventListener('click', () => {
      vipModal.classList.remove('active');
    });
  }

  if (vipModal) {
    vipModal.addEventListener('click', (e) => {
      if (e.target === vipModal) {
        vipModal.classList.remove('active');
      }
    });
  }

  // Pre-fill WhatsApp Concierge
  window.sendWhatsAppConcierge = (specialtyName = '') => {
    const phone = '919876543210';
    let text = 'Hello Adhira Wellness Concierge, I would like to schedule a private executive physiotherapy consultation.';
    if (specialtyName) {
      text = `Hello Adhira Wellness Concierge, I would like to enquire about VIP rehabilitation for: ${specialtyName}. Please share executive suite availability.`;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
});
