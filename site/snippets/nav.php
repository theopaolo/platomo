<nav class="relative px-4 py-2 xl:p-4 z-50 dark:text-white w-full xl:fixed top-0" x-data="navComponent()" @click.away="closeNav()">

  <div class="flex justify-between sticky top-2">
    <a href="<?= $site->url() ?>" class="flex items-center w-12" data-no-swup>
      <svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <!-- Circles (background) - black in light mode, white in dark mode -->
        <circle class="logo-circle" cx="12" cy="12" r="12" fill="black"/>
        <circle class="logo-circle" cx="32.5" cy="32.5" r="10.5" fill="black"/>
        <circle class="logo-circle" cx="29" cy="14" r="14" fill="black"/>
        <circle class="logo-circle" cx="11.5" cy="34.5" r="8.5" fill="black"/>
        <rect class="logo-border" x="3.25" y="45.25" width="38.5" height="10.5" rx="5.25" stroke="black" stroke-width="0.5"/>

        <!-- White letters (LAB) - hidden by default, visible on hover -->
        <path class="logo-letter" d="M32.4924 38C29.3366 38 27 35.5588 27 32.4853C27 29.4118 29.3366 27 32.4924 27C35.6483 27 38 29.4118 38 32.4853C38 35.5588 35.6483 38 32.4924 38ZM32.4924 37.0147C35.0717 37.0147 36.8166 35.0147 36.8166 32.4853C36.8166 29.9559 35.0717 27.9853 32.4924 27.9853C29.9283 27.9853 28.1683 29.9559 28.1683 32.4853C28.1683 35.0147 29.9283 37.0147 32.4924 37.0147Z" fill="white"/>
        <path class="logo-letter" d="M37 21.6407C37 23.7799 35.4431 25 33.1077 25H29V13H32.8592C35.1615 13 36.5197 14.1198 36.5197 16.0919C36.5197 17.2786 35.7743 18.2981 34.5652 18.7493C36.1718 19.1504 37 20.2033 37 21.6407ZM32.793 14.0195H30.1594V18.298H32.793C34.3996 18.298 35.3106 17.4958 35.3106 16.1588C35.3106 14.8217 34.3996 14.0195 32.793 14.0195ZM33.0414 19.3175H30.1594V23.9805H33.0414C34.7805 23.9805 35.8075 23.1114 35.8075 21.6072C35.8075 20.1699 34.7805 19.3175 33.0414 19.3175Z" fill="white"/>
        <path class="logo-letter" d="M14 18H7V5H8.28049V16.7869H14V18Z" fill="white"/>
        <path class="logo-letter" d="M25.6401 18L24.349 14.9513H18.5822L17.2739 18H16L20.8028 7H22.2144L27 18H25.6401ZM21.4742 8.22563L18.9781 14.0167H23.9358L21.4742 8.22563Z" fill="white"/>

        <!-- Black text (mobile) - hidden by default, visible on hover -->
        <path class="logo-text" d="M7.73225 53.9038H7V48.8365H7.67995V49.7885C8.04607 49.1346 8.69464 48.7404 9.4792 48.7404C10.337 48.7404 10.9751 49.1731 11.2052 49.9135C11.5504 49.2019 12.2408 48.7404 13.1091 48.7404C14.2493 48.7404 14.9606 49.4327 14.9606 50.6154V53.9038H14.2388V50.8365C14.2388 49.875 13.7576 49.3269 12.8685 49.3269C12.0316 49.3269 11.3517 50 11.3517 50.9327V53.9038H10.6194V50.8365C10.6194 49.875 10.1382 49.3269 9.24906 49.3269C8.40174 49.3269 7.73225 50 7.73225 50.9327V53.9038Z" fill="black"/>
        <path class="logo-text" d="M18.7077 54C17.1909 54 16.0925 52.8942 16.0925 51.3654C16.0925 49.8462 17.1909 48.75 18.7077 48.75C20.235 48.75 21.3333 49.8462 21.3333 51.3654C21.3333 52.8942 20.235 54 18.7077 54ZM18.7077 53.4135C19.7852 53.4135 20.5906 52.625 20.5906 51.3654C20.5906 50.125 19.7852 49.3365 18.7077 49.3365C17.6407 49.3365 16.8352 50.125 16.8352 51.3654C16.8352 52.625 17.6407 53.4135 18.7077 53.4135Z" fill="black"/>
        <path class="logo-text" d="M27.57 51.3654C27.57 52.9231 26.6181 54 25.1431 54C24.2958 54 23.5844 53.5769 23.1974 52.8365V53.9038H22.5174V47H23.2497V49.9038C23.6054 49.1635 24.3062 48.7404 25.1431 48.7404C26.6181 48.7404 27.57 49.8077 27.57 51.3654ZM26.8273 51.3654C26.8273 50.0769 26.1055 49.3269 25.028 49.3269C23.9924 49.3269 23.2392 50.0673 23.2392 51.3462C23.2392 52.6154 23.9715 53.4135 25.028 53.4135C26.1055 53.4135 26.8273 52.6538 26.8273 51.3654Z" fill="black"/>
        <path class="logo-text" d="M29.7009 47.6635C29.7009 47.9615 29.4603 48.1731 29.1046 48.1731C28.7594 48.1731 28.5188 47.9615 28.5188 47.6635C28.5188 47.375 28.7594 47.1635 29.1046 47.1635C29.4603 47.1635 29.7009 47.375 29.7009 47.6635ZM29.4812 53.9038H28.7489V48.8365H29.4812V53.9038Z" fill="black"/>
        <path class="logo-text" d="M31.8001 53.9038H31.0679V47H31.8001V53.9038Z" fill="black"/>
        <path class="logo-text" d="M35.5522 54C34.004 54 32.9788 52.9327 32.9788 51.3269C32.9788 49.8462 34.0458 48.7404 35.5103 48.7404C37.0795 48.7404 38.1046 49.9038 37.9791 51.5288H33.7111C33.7739 52.7308 34.4643 53.4712 35.5417 53.4712C36.4623 53.4712 37.1004 53 37.2782 52.1923H38C37.7489 53.3173 36.8179 54 35.5522 54ZM35.4999 49.2596C34.5061 49.2596 33.8052 49.9615 33.7111 51.0673H37.2154C37.1527 49.9327 36.5146 49.2596 35.4999 49.2596Z" fill="black"/>
      </svg>
      <span class="ml-2 text-xl font-bold text-neutral-950 dark:text-white sr-only"><?= $site->title() ?></span>
    </a>

    <div class="flex items-start gap-2">
      <!-- Dark mode toggle button -->
      <button
        id="theme-toggle"
        class="theme-toggle rounded-full border dark:border-white"
        type="button"
        title="Toggle theme"
        aria-label="Toggle theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="1.5em"
          height="1.5em"
          class="theme-toggle__eclipse"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <clipPath id="theme-toggle__eclipse__cutout">
            <path d="M0 0h64v32h-64zm36 16a1 1 0 0024 1 1 1 0 00-24-1" />
          </clipPath>
          <g clip-path="url(#theme-toggle__eclipse__cutout)">
            <circle cx="16" cy="16" r="16" />
          </g>
        </svg>
      </button>

      <button @click="toggleNav"
              :class="{'bg-neutral-950 text-white': isOpen, 'bg-white text-black dark:bg-neutral-800 dark:text-white': !isOpen}"
              class="hidden flex items-center border-neutral-950 dark:border-white border border-b text-sm font-medium uppercase pl-2 pr-1 py-1 rounded-full hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 group">
        Navigation
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            :class="{'fill-secondary': isOpen, 'rotate-45': isOpen}"
            class="w-8 h-8 ml-2 transition-transform group-hover:rotate-45 group-hover:fill-secondary">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM11.5 6V11.5H6V12.5H11.5V18H12.5V12.5H18V11.5H12.5V6H11.5Z"/>
        </svg>
      </button>
    </div>
  </div>

  <?php
  $items = $pages->listed();
  if($items->isNotEmpty()):
  ?>
    <ul :class="{ 'navin': isOpen }"
        x-ref="nav"
        class="hidden border-2 dark:border-gray-700 bg-secondary dark:bg-neutral-800 rounded-xl p-2 min-w-60 right-4 absolute mt-2 flex-col gap-2 z-[9999]">
    <li class="uppercase rounded-full">
      <a class="transition-colors duration-300 hover:bg-white dark:hover:bg-neutral-700 w-full block rounded-full p-2" href="<?= $site->url() ?>">Plateau</a>
    </li>
      <?php foreach($items as $item): ?>
        <li class="uppercase rounded-full">
          <a class="transition-colors duration-300 hover:bg-white dark:hover:bg-neutral-700 w-full block rounded-full p-2" <?php e($item->isOpen(), ' class="active"') ?> href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
        </li>
      <?php endforeach ?>
    </ul>
  <?php endif ?>
</nav>

<script>
  // using swup reset the nav state on page change
  function navComponent() {
        return {
            isOpen: false,
            toggleNav() {
                if (this.isOpen) {
                  this.closeNav();
                } else {
                  this.$refs.nav.classList.remove('hidden');
                  setTimeout(() => {
                    this.isOpen = true;
                  }, 100);
                }
              },
              closeNav() {
                this.$refs.nav.classList.add('navout');
                setTimeout(() => {
                  this.isOpen = false;
                  this.$refs.nav.classList.add('hidden');
                  this.$refs.nav.classList.remove('navout');
                }, 400);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
    const clipPath = document.querySelector('#theme-toggle__eclipse__cutout');
    if (clipPath) {
      // Set initial state based on dark mode
      if (document.documentElement.classList.contains('dark')) {
        clipPath.style.transform = 'translateX(-32px)';
      } else {
        clipPath.style.transform = 'translateX(0)';
      }

      // Watch for changes to the dark class on the html element
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
              clipPath.style.transform = 'translateX(-32px)';
            } else {
              clipPath.style.transform = 'translateX(0)';
            }
          }
        });
      });

      observer.observe(document.documentElement, { attributes: true });
    }
  });
</script>

<style>
  .theme-toggle__eclipse {
    transition: transform 0.5s ease;
  }

  #theme-toggle__eclipse__cutout {
    transition: transform 0.5s ease;
  }
</style>
