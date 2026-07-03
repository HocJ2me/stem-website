// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

// Active nav link
const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
const currentPath = location.pathname.replace(/\/$/, '') || '/index.html';
navLinks.forEach(a => {
  const href = a.getAttribute('href');
  if (href && (currentPath.endsWith(href.replace('.html','')) || currentPath === '/' && href.includes('index'))) {
    a.classList.add('active');
  }
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const isOpen = ans.classList.contains('open');
    document.querySelectorAll('.faq-a.open').forEach(a => { a.classList.remove('open'); a.previousElementSibling.querySelector('.faq-icon').textContent = '+'; });
    if (!isOpen) { ans.classList.add('open'); if (icon) icon.textContent = '−'; }
  });
});

// Subject tab filter (curriculum page)
document.querySelectorAll('.subject-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.subject-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.course-card').forEach(card => {
      card.parentElement.style.display = (filter === 'all' || card.dataset.subject === filter) ? '' : 'none';
    });
    document.querySelectorAll('.subject-group').forEach(g => {
      const visible = [...g.querySelectorAll('.course-card')].some(c => c.parentElement.style.display !== 'none');
      g.style.display = visible ? '' : 'none';
    });
  });
});

// Grade tab filter
document.querySelectorAll('.grade-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.grade-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.grade;
    document.querySelectorAll('.grade-section').forEach(sec => {
      sec.style.display = (filter === 'all' || sec.dataset.grade === filter) ? '' : 'none';
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// Contact form submit
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.textContent = '✓ Đã gửi thành công!';
    btn.style.background = '#10B981';
    btn.disabled = true;
  });
}

// Explore filter
document.querySelectorAll('[data-topic]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-topic]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const topic = btn.dataset.topic;
    document.querySelectorAll('.explore-card').forEach(card => {
      card.style.display = (topic === 'all' || (card.dataset.topics || '').includes(topic)) ? '' : 'none';
    });
  });
});
