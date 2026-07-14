const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
  document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach((el, i) => {
  if (el.closest('.product-grid') || el.closest('.gallery-grid') || el.closest('.feature-grid') || el.closest('.test-grid')) {
    el.style.transitionDelay = (i % 6) * 0.08 + 's';
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Ripple effect
document.querySelectorAll('.btn-primary, .btn-outline, .cta-btn, .submit-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const span = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    span.className = 'ripple-span';
    span.style.width = span.style.height = size + 'px';
    span.style.left = (e.clientX - rect.left - size / 2) + 'px';
    span.style.top = (e.clientY - rect.top - size / 2) + 'px';
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(span);
    setTimeout(() => span.remove(), 600);
  });
});

// Header background on scroll
const header = document.querySelector('header');
if (header && !header.classList.contains('solid')) {
  const toggleHeader = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', toggleHeader);
  toggleHeader();
}

// Product detail thumbnail switcher
const mainImg = document.getElementById('detailMainImg');
const thumbs = document.querySelectorAll('.detail-thumbs img');
if (mainImg && thumbs.length) {
  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      mainImg.src = t.src;
      thumbs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });
}
