const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollTriggers = document.querySelectorAll('[data-scroll], .nav-links a');
const contactForm = document.querySelector('#contactForm');
const formFeedback = document.querySelector('#formFeedback');
const yearElement = document.querySelector('#year');

yearElement.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
  navToggle.classList.toggle('open');
});

scrollTriggers.forEach((item) => {
  item.addEventListener('click', (event) => {
    const targetId = item.dataset.scroll || item.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;
    event.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('nav-open');
      navToggle.classList.remove('open');
    }
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formFeedback.textContent = 'Thanks! Your message has been sent.';
  formFeedback.classList.add('success');
  contactForm.reset();
  setTimeout(() => {
    formFeedback.textContent = '';
    formFeedback.classList.remove('success');
  }, 4500);
});
