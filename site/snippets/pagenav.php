<aside class="h-fit z-50 mt-8 mb-4">
  <div class="next-prev flex gap-2 my-4 items-end">
    <?php if($next = $page->nextListed()): ?>
      <a href="<?= $next->url() ?>" class="hover:rotate-45 transition-transform">
        <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.5 99.0701 0.5 64C0.5 28.9299 28.9299 0.5 64 0.5C99.0701 0.5 127.5 28.9299 127.5 64Z" fill="white" stroke="black" class="dark:fill-neutral-900 dark:stroke-white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M34 88.3428L84.3431 37.9999L34 37.9999L34 29.9998L98 29.9999L98 93.9998L90 93.9998L90 43.6567L39.6569 93.9997L34 88.3428Z" fill="#2E2420" class="dark:fill-white"/>
        </svg>
      </a>
    <?php endif ?>
    <?php if($prev = $page->prevListed()): ?>
      <a href="<?= $prev->url() ?>" class="hover:rotate-45 transition-transform">
        <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.499994 64C0.499991 28.9299 28.9299 0.500009 64 0.500006C99.0701 0.500003 127.5 28.9299 127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.499997 99.0701 0.499994 64Z" fill="white" stroke="black" class="dark:fill-neutral-900 dark:stroke-white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M94 39.6572L43.6569 90.0001L94 90.0001V98.0001H30L30 34.0002H38L38 84.3433L88.3431 34.0003L94 39.6572Z" fill="#2E2420" class="dark:fill-white"/>
        </svg>
      </a>
    <?php endif ?>
    <?php $random = $page->siblings()->listed()->shuffle()->first(); ?>
    <?php if($random): ?>
      <a href="<?= $random->url() ?>" class="hover:rotate-12 transition-transform">
      <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.499994 64C0.499991 28.9299 28.9299 0.500009 64 0.500006C99.0701 0.500003 127.5 28.9299 127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.499997 99.0701 0.499994 64Z" fill="white" stroke="black" class="dark:fill-neutral-900 dark:stroke-white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M42 26H86C94.8366 26 102 33.1634 102 42V86C102 94.8366 94.8366 102 86 102H42C33.1634 102 26 94.8366 26 86V42C26 33.1634 33.1634 26 42 26ZM42 34C37.5817 34 34 37.5817 34 42V86C34 90.4183 37.5817 94 42 94H86C90.4183 94 94 90.4183 94 86V42C94 37.5817 90.4183 34 86 34H42Z" fill="black" class="dark:fill-white"/>
        <path d="M57.0004 53.0002C57.0004 55.2093 55.2096 57.0002 53.0004 57.0002C50.7913 57.0002 49.0004 55.2093 49.0004 53.0002C49.0004 50.791 50.7913 49.0002 53.0004 49.0002C55.2096 49.0002 57.0004 50.791 57.0004 53.0002Z" fill="black" class="dark:fill-white"/>
        <path d="M79.0004 53.0002C79.0004 55.2093 77.2096 57.0002 75.0004 57.0002C72.7913 57.0002 71.0004 55.2093 71.0004 53.0002C71.0004 50.791 72.7913 49.0002 75.0004 49.0002C77.2096 49.0002 79.0004 50.791 79.0004 53.0002Z" fill="black" class="dark:fill-white"/>
        <path d="M79.0004 75.0002C79.0004 77.2093 77.2096 79.0002 75.0004 79.0002C72.7913 79.0002 71.0004 77.2093 71.0004 75.0002C71.0004 72.791 72.7913 71.0002 75.0004 71.0002C77.2096 71.0002 79.0004 72.791 79.0004 75.0002Z" fill="black" class="dark:fill-white"/>
        <path d="M57.0004 75.0002C57.0004 77.2093 55.2096 79.0002 53.0004 79.0002C50.7913 79.0002 49.0004 77.2093 49.0004 75.0002C49.0004 72.791 50.7913 71.0002 53.0004 71.0002C55.2096 71.0002 57.0004 72.791 57.0004 75.0002Z" fill="black" class="dark:fill-white"/>
        <path d="M68.0004 64.0002C68.0004 66.2093 66.2096 68.0002 64.0004 68.0002C61.7913 68.0002 60.0004 66.2093 60.0004 64.0002C60.0004 61.791 61.7913 60.0002 64.0004 60.0002C66.2096 60.0002 68.0004 61.791 68.0004 64.0002Z" fill="black" class="dark:fill-white"/>
      </svg>
    </a>
    <?php endif ?>
  </div>
</aside>
