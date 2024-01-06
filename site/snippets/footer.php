<footer class="mt-20">
  <p class="copyright"><?= $site->copyright() ?></p>
</footer>

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
    const INITIAL_DELAY = 0.3;
    const DELAY_INCREMENT = 0.2;
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
  document.addEventListener('DOMContentLoaded', () => {
    adjustContainerHeight();
    setupArticleAnimations();
  });
</script>

<?= js('assets/dist/js/app.js') ?>
</body>
</html>