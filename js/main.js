document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.current-year').forEach((yearEl) => {
    yearEl.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('.nav-dropdown-toggle').forEach((button) => {
    button.addEventListener('click', (event) => {
      const redirect = button.getAttribute('data-redirect');
      if (redirect) {
        event.preventDefault();
        window.location.href = redirect;
      }
    });
  });

  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileNavClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Contact form
  const WEB3FORMS_ACCESS_KEY = 'bc93c48b-d814-4364-b33b-98ad2b9b89e9';
  const form = document.querySelector('#contact-form');
  if (form) {
    const feedback = document.getElementById('form-feedback');

    const setFeedback = (message, isError = false) => {
      if (!feedback) return;
      feedback.textContent = message;
      feedback.style.color = isError ? '#b42318' : 'var(--navy)';
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim().toLowerCase();
      const phone = (data.get('phone') || '').toString().trim();
      const subject = (data.get('subject') || '').toString().trim() || 'Contact via website';
      const message = (data.get('message') || '').toString().trim();
      const consent = form.querySelector('#consent')?.checked;
      const website = (data.get('website') || '').toString().trim();

      if (website) {
        setFeedback('Bericht niet verzonden.', true);
        return;
      }

      if (!name || name.length < 2) {
        setFeedback('Vul uw naam in.', true);
        form.querySelector('#name')?.focus();
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
        setFeedback('Vul een geldig e-mailadres in.', true);
        form.querySelector('#email')?.focus();
        return;
      }

      if (phone && !/^\+?[0-9\s\-/()]{6,20}$/.test(phone)) {
        setFeedback('Controleer het telefoonnummer.', true);
        form.querySelector('#phone')?.focus();
        return;
      }

      if (!consent) {
        setFeedback('Accepteer het privacybeleid om te verzenden.', true);
        return;
      }

      if (message.length < 10 || message.length > 2000) {
        setFeedback('Het bericht moet tussen 10 en 2000 tekens zijn.', true);
        form.querySelector('#message')?.focus();
        return;
      }

      if (/(https?:\/\/|www\.)/i.test(message) || /\b(viagra|casino|crypto|free money|buy now)\b/i.test(message)) {
        setFeedback('Bericht bevat niet-toegestane inhoud.', true);
        form.querySelector('#message')?.focus();
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) submitButton.disabled = true;
      setFeedback('Bericht wordt verzonden…');

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Contactformulier: ${subject}`,
          from_name: name,
          name,
          email,
          phone: phone || 'Niet opgegeven',
          message,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            setFeedback('Bedankt! Uw bericht is verzonden. Ik neem snel contact met u op.');
            form.reset();
          } else {
            setFeedback('Er ging iets mis bij het verzenden. Probeer het later opnieuw of mail naar sara.heiremans@logoflow.be.', true);
          }
        })
        .catch(() => {
          setFeedback('Er ging iets mis bij het verzenden. Probeer het later opnieuw of mail naar sara.heiremans@logoflow.be.', true);
        })
        .finally(() => {
          if (submitButton) submitButton.disabled = false;
        });
    });
  }
});
