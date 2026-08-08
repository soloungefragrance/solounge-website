const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('[data-menu]');

const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

if (menuButton && menu) {
  const closeMenu = () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('is-open', !open);
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButton.focus();
    }
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const preorderForm = document.querySelector('[data-preorder-form]');
const preorderTarget = document.querySelector('[data-form-target]');
const preorderSuccess = document.querySelector('[data-form-success]');
const preorderSelect = document.querySelector('[data-preorder-select]');
let preorderSubmitted = false;

document.querySelectorAll('[data-preorder-choice]').forEach((link) => {
  link.addEventListener('click', () => {
    if (preorderSelect) preorderSelect.value = link.dataset.preorderChoice || '';
  });
});

if (preorderForm && preorderTarget && preorderSuccess) {
  preorderForm.addEventListener('submit', () => {
    preorderSubmitted = true;
    preorderSuccess.hidden = true;
  });

  preorderTarget.addEventListener('load', () => {
    if (!preorderSubmitted) return;
    preorderSubmitted = false;
    preorderForm.reset();
    preorderSuccess.hidden = false;
    const checkoutUrl = preorderForm.dataset.checkoutUrl?.trim();
    if (checkoutUrl) {
      preorderSuccess.textContent = 'Deine Vormerkung wurde gespeichert. Du wirst jetzt zum sicheren Checkout weitergeleitet.';
      window.setTimeout(() => window.location.assign(checkoutUrl), 900);
    } else {
      preorderSuccess.textContent = 'Deine Vormerkung wurde gespeichert. Der sichere Checkout wird freigeschaltet, sobald Preis und Verfügbarkeit bestätigt sind.';
    }
    preorderSuccess.focus?.();
  });
}
