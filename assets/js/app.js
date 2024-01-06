import Alpine from 'alpinejs';
import Swup from 'swup';

// Initialize Swup
const swup = new Swup();

// Add event listener for all links with 'data-swup-transition' attribute
document.addEventListener('click', (event) => {
  if (event.target.matches('a[data-swup-transition]')) {
    document.body.classList.add('no-scroll');
  }
});

// Remove 'no-scroll' class before Swup replaces content
swup.hooks.on('content:replace', () => {
  document.body.classList.remove('no-scroll');
});


// Reinitialize Alpine.js and setup click outside behavior after Swup transition
swup.hooks.on('content:replace', () => {
  Alpine.start();
});

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();
