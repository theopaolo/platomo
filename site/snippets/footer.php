<script>

  const adjustContainerHeight = () => {
    const title = document.querySelector('h1');
    const container = document.querySelector('.title-container');
    if (title && container) {
      const titleHeight = title.offsetHeight;
      container.style.height = `${titleHeight}px`;
    }
  };

  const setupArticleAnimations = () => {
    const articles = document.querySelectorAll('.listing a');
    const INITIAL_DELAY = 0.1;
    const DELAY_INCREMENT = 0.1;
    let animationDelay = INITIAL_DELAY;

    const startAnimation = (element) => {
      element.classList.add('article-animation');
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
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    if (!themeToggle) return;

    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // If the user has explicitly chosen a theme, use that
    if (savedTheme === 'dark') {
      html.classList.add('dark');
    } else if (savedTheme === 'light') {
      html.classList.remove('dark');
    } else if (systemPrefersDark) {
      // If no saved preference, respect the system preference
      html.classList.add('dark');
    }

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
      // Add transitioning class
      html.classList.add('theme-transitioning');

      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }

      // Remove transitioning class after transition completes
      setTimeout(() => {
        html.classList.remove('theme-transitioning');
      }, 500); // Match this with the CSS transition duration
    });
  };

  const enterIntro = () => {
    const enterBtn = document.querySelector('.enter-btn');
    const introOverlay = document.querySelector('.intro-overlay');

    if (localStorage.getItem('entered') === 'true' && introOverlay) {
      introOverlay.style.display = 'none';
    }

    if(enterBtn) {
      enterBtn.addEventListener('click', (e) => {
        localStorage.setItem("entered", "true");

        // Add fadeOut animation from varnish.css
        introOverlay.style.animation = 'fadeOut 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';

        // After animation completes, make it invisible and remove from DOM flow
        setTimeout(() => {
          introOverlay.classList.add('invisible');
          introOverlay.style.display = 'none';
        }, 500); // Match this with the CSS animation duration
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    adjustContainerHeight();
    setupArticleAnimations();
    setupThemeToggle();
    enterIntro();
  });



</script>

<?= js('assets/dist/js/app.js') ?>
</body>
</html>
