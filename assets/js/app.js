import focus from "@alpinejs/focus";
import Alpine from "alpinejs";
import Plyr from "plyr";
import Swup from "swup";
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

// Initialize Swup with optimized options
const swup = new Swup({
  animationSelector: '[class*="transition-"]',
  cache: true,
  animateHistoryBrowsing: true,
  preload: true,
  animationDuration: 10,
});

const pageWrapper = document.querySelector("#swup");

let previousURL = window.location.href;
const player = new Plyr("#player", {
  controls,
});

function goBackWithSwup() {
  const pageWrapper = document.querySelector(".swup-page-home .page-wrapper");
  document.body.classList.remove("no-scroll");

  if (pageWrapper) {
    // Add the fade-out-animation class to trigger the fade out
    pageWrapper.classList.add("fade-out-animation");
    // Listen for the end of the fade-out animation on the main element
    const mainElement = pageWrapper.querySelector("main");

    mainElement.addEventListener(
      "animationend",
      () => {
        // Perform any cleanup after the animation (like hiding or removing the element)

        swup.navigate(previousURL);
      },
      { once: true }
    );
  }
}

// Add event listener for all links with 'data-swup-transition' attribute
document.addEventListener("click", (event) => {
  if (event.target.matches("a[data-swup]")) {
    document.body.classList.add("no-scroll");
  }
  // Add event listener for page background to close swup page
  if (event.target.matches(".bg-blur")) {
    goBackWithSwup();
  }

  if (event.target.matches(".go-back") || event.target.closest(".go-back")) {
    console.log("go back");
    event.preventDefault();
    goBackWithSwup();
  }

  const link = event.target.closest("a[data-instant-transition]");
  if (link) {
    // Skip animations for this specific transition
    document.documentElement.classList.add("is-leaving");
    swup.options.animationDuration = 10;
  }
});

// listen to esc key and close swup page
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    goBackWithSwup();
  }
});

const adjustContainerHeight = () => {
  const title = document.querySelector("h1");
  const container = document.querySelector(".title-container");
  if (title && container) {
    const titleHeight = title.offsetHeight;
    container.style.height = `${titleHeight}px`;
  }
};

const setupArticleAnimations = () => {
  if (
    !document.querySelector(".listing") ||
    document.documentElement.classList.contains("is-leaving")
  ) {
    return; // Skip animations if not on allcontributions or if we're leaving
  }

  const articles = document.querySelectorAll(".listing a");
  const INITIAL_DELAY = 0.1;
  const DELAY_INCREMENT = 0.1;
  let animationDelay = INITIAL_DELAY;

  const startAnimation = (element) => {
    element.classList.add("article-animation");
    element.style.animationDelay = `${animationDelay}s`;
    animationDelay += DELAY_INCREMENT;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  articles.forEach((article) => {
    observer.observe(article);
  });
};

// Theme toggle functionality
const setupThemeToggle = () => {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  if (!themeToggle) return;

  // Check for saved theme preference or use the system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // If the user has explicitly chosen a theme, use that
  if (savedTheme === "dark") {
    html.classList.add("dark");
  } else if (savedTheme === "light") {
    html.classList.remove("dark");
  } else if (systemPrefersDark) {
    // If no saved preference, respect the system preference
    html.classList.add("dark");
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    // Add transitioning class
    html.classList.add("theme-transitioning");

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    // Remove transitioning class after transition completes
    setTimeout(() => {
      html.classList.remove("theme-transitioning");
    }, 500); // Match this with the CSS transition duration
  });
};

const enterIntro = () => {
  const enterBtn = document.querySelector(".enter-btn");
  const introOverlay = document.querySelector(".intro-overlay");

  if (localStorage.getItem("entered") === "true" && introOverlay) {
    introOverlay.style.display = "none";
  }

  if (enterBtn) {
    enterBtn.addEventListener("click", (e) => {
      localStorage.setItem("entered", "true");

      // Add fadeOut animation from varnish.css
      introOverlay.style.animation =
        "fadeOut 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";

      // After animation completes, make it invisible and remove from DOM flow
      setTimeout(() => {
        introOverlay.classList.add("invisible");
        introOverlay.style.display = "none";
      }, 500); // Match this with the CSS animation duration
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  adjustContainerHeight();
  setupArticleAnimations();
  setupThemeToggle();
  enterIntro();
});

// Init Plyr player when swup page is loaded
swup.hooks.on("content:replace", () => {
  setupArticleAnimations();
  const player = new Plyr("#player", {
    controls,
  });
});

swup.hooks.on("page:view", (visit) => {
  newUrl = visit.to.url;
  document.documentElement.classList.remove("is-leaving");
  console.log("newUrl", newUrl);
  console.log("prevUrl", previousURL);

  // Show go-back button only if coming from index page
  const goBackButton = document.querySelectorAll(".go-back");

  if (goBackButton) {
    // Create URL object from previousURL to properly parse the pathname
    const prevUrlObj = new URL(previousURL);
    const isFromIndex =
      prevUrlObj.pathname === "/" || prevUrlObj.pathname === "";
    goBackButton.forEach((button) => {
      button.style.display = isFromIndex ? "block" : "none";
    });
  }
});

swup.hooks.on("visit:start", (visit) => {
  console.log("visit:start", visit);

  if (document.querySelector(".listing")) {
    document.documentElement.classList.add("is-leaving");
    swup.options.animationDuration = 10; // Very short duration (milliseconds)
  } else {
    swup.options.animationDuration = 400; // Normal duration for other transitions
  }
});

// Simple vanilla JS lightbox
function initLightbox() {
  // Get all gallery images
  const galleryImages = Array.from(document.querySelectorAll('figure[aria-labelledby^="gallery-"] img')).map(img => ({
    src: img.src,
    alt: img.alt
  }));

  if (galleryImages.length === 0) return;

  // Create lightbox HTML
  const lightboxHTML = `
    <div id="lightbox" class="fixed inset-0 z-[99] hidden items-center justify-center bg-black bg-opacity-0 cursor-zoom-out transition-opacity duration-300">
      <div class="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
        <button id="lightbox-prev" class="absolute left-0 flex items-center justify-center text-white translate-x-10 hover:rotate-45 transition-transform rounded-full xl:-translate-x-24 2xl:-translate-x-32 focus:outline-none focus:ring-4 focus:ring-white" aria-label="Previous image">
          <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M0.499994 64C0.499991 28.9299 28.9299 0.500009 64 0.500006C99.0701 0.500003 127.5 28.9299 127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.499997 99.0701 0.499994 64Z" fill="white" stroke="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M94 39.6572L43.6569 90.0001L94 90.0001V98.0001H30L30 34.0002H38L38 84.3433L88.3431 34.0003L94 39.6572Z" fill="#2E2420"/>
          </svg>
        </button>

        <div class="relative max-w-full max-h-[90vh]">
          <img id="lightbox-image" class="object-contain object-center w-full h-full max-h-[90vh] cursor-zoom-out opacity-0 invisible transition-all duration-300" style="visibility: hidden;">
        </div>

        <button id="lightbox-next" class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full hover:rotate-45 transition-transform xl:translate-x-24 2xl:translate-x-32 focus:outline-none focus:ring-4 focus:ring-white" aria-label="Next image">
          <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.5 99.0701 0.5 64C0.5 28.9299 28.9299 0.5 64 0.5C99.0701 0.5 127.5 28.9299 127.5 64Z" fill="white" stroke="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34 88.3428L84.3431 37.9999L34 37.9999L34 29.9998L98 29.9999L98 93.9998L90 93.9998L90 43.6567L39.6569 93.9997L34 88.3428Z" fill="#2E2420"/>
          </svg>
        </button>

        <button id="lightbox-close" class="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white" aria-label="Close gallery viewer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="lightbox-counter" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full opacity-0 transition-opacity duration-300"></div>
      </div>
    </div>
  `;

  // Add lightbox to body if it doesn't exist
  if (!document.getElementById('lightbox')) {
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxCounter = document.getElementById('lightbox-counter');

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = index;
    const image = galleryImages[index];

    // Fade out current image
    lightboxImage.style.opacity = '0';
    lightboxImage.style.visibility = 'hidden';

    // Wait for fade out before changing image
    setTimeout(() => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxImage.style.visibility = 'visible';

      // Fade in new image
      setTimeout(() => {
        lightboxImage.style.opacity = '1';
      }, 50);
    }, 300);

    lightboxCounter.textContent = `${index + 1} / ${galleryImages.length}`;

    // Show/hide navigation buttons
    lightboxPrev.style.display = galleryImages.length > 1 ? 'flex' : 'none';
    lightboxNext.style.display = galleryImages.length > 1 ? 'flex' : 'none';
  }

  function openLightbox(index) {
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Trigger reflow to ensure transition works
    lightbox.offsetHeight;

    // Fade in background and elements
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    lightboxCounter.style.opacity = '1';

    // Set initial image state
    lightboxImage.style.visibility = 'visible';
    setTimeout(() => {
      lightboxImage.style.opacity = '1';
    }, 50);

    showImage(index);
  }

  function closeLightbox() {
    // Fade out background and elements
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    lightboxImage.style.opacity = '0';
    lightboxCounter.style.opacity = '0';

    // Wait for fade out before hiding
    setTimeout(() => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lightboxImage.style.visibility = 'hidden';
      document.body.style.overflow = '';
    }, 300);
  }

  // Add click handlers to gallery images
  galleryImages.forEach((_, index) => {
    const img = document.querySelectorAll('figure[aria-labelledby^="gallery-"] img')[index];
    img.addEventListener('click', () => openLightbox(index));
  });

  // Add navigation handlers
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(prevIndex);
  });

  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    showImage(nextIndex);
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', closeLightbox);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('flex')) return;

    switch(e.key) {
      case 'ArrowLeft':
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(prevIndex);
        break;
      case 'ArrowRight':
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        showImage(nextIndex);
        break;
      case 'Escape':
        closeLightbox();
        break;
    }
  });
}

// Initialize Alpine
window.Alpine = Alpine;
Alpine.plugin(focus);
Alpine.start();

// Initialize lightbox after Swup page transitions
swup.hooks.on('content:replace', () => {
  // Wait for the DOM to be ready
  setTimeout(() => {
    initLightbox();
  }, 0);
});

// Initialize lightbox on first load
document.addEventListener('DOMContentLoaded', initLightbox);