const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
