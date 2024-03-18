import Alpine from 'alpinejs';
import Swup from 'swup';
import Plyr from 'plyr';
// import 'lazysizes';

const controls = `
<div class="plyr__controls">
    <button type="button" class="plyr__control" data-plyr="fullscreen">
      FULLSCREEN
    </button>

    <div class="plyr_duration_times">
      <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
      <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
    </div>

    <div class="plyr__volume">
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
    </div>

    <div class="plyr__progress">
      <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
      <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
      <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
</div>

<button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-pressed="false" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>
`;

// Initialize Swup
const swup = new Swup();
const pageWrapper = document.querySelector('#swup');
let previousURL = window.location.href;

const player = new Plyr('#player', {
  controls
});

function goBackWithSwup() {
    const pageWrapper = document.querySelector('.swup-page-home .page-wrapper');
    document.body.classList.remove('no-scroll');

      if (pageWrapper) {
        // Add the fade-out-animation class to trigger the fade out
        pageWrapper.classList.add('fade-out-animation');
        // Listen for the end of the fade-out animation on the main element
        const mainElement = pageWrapper.querySelector('main');

        mainElement.addEventListener('animationend', () => {
          // Perform any cleanup after the animation (like hiding or removing the element)

          swup.navigate(previousURL);
        }, { once: true });
      }
}

// Add event listener for all links with 'data-swup-transition' attribute
document.addEventListener('click', (event) => {
  if (event.target.matches('a[data-swup]')) {
    document.body.classList.add('no-scroll');
  }
  // Add event listener for page background to close swup page
  if (event.target.matches('.bg-blur')) {
    goBackWithSwup();
  }
});

// listen to esc key and close swup page
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    goBackWithSwup();
  }
});

// Init Plyr player when swup page is loaded
swup.hooks.on('content:replace', () => {
  const player = new Plyr('#player', {
    controls
  });
});

swup.hooks.on('page:view', (visit) => {
  newUrl = visit.to.url;
  console.log('newUrl', newUrl);
  console.log('prevUrl', previousURL);
});

swup.hooks.on('visit:start', (visit) => {
  console.log('visit:start', visit);
});

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

let newUrl = 123;
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(''));
console.log(typeof(0));
console.log(typeof(-1));
console.log(typeof(goBackWithSwup));
