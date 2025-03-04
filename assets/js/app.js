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

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.plugin(focus);
Alpine.start();

let newUrl = 123;
