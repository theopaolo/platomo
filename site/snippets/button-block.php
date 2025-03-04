<?php if ($block->type() == 'button'): ?>
  <a href="<?= $block->link() ?>" class="group flex items-center gap-4 w-fit rounded-full py-1 pl-4 pr-1 border my-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
    <?= $block->text() ?>
    <span class="transition-transform duration-300 group-hover:rotate-45">
      <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.5 99.0701 0.5 64C0.5 28.9299 28.9299 0.5 64 0.5C99.0701 0.5 127.5 28.9299 127.5 64Z" fill="white" stroke="black" class="transition-colors duration-300 group-hover:fill-black group-hover:stroke-white dark:fill-neutral-900 dark:stroke-white dark:group-hover:fill-white dark:group-hover:stroke-black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 88.3428L84.3431 37.9999L34 37.9999L34 29.9998L98 29.9999L98 93.9998L90 93.9998L90 43.6567L39.6569 93.9997L34 88.3428Z" fill="#2E2420" class="transition-colors duration-300 group-hover:fill-white dark:fill-white dark:group-hover:fill-black"/>
      </svg>
    </span>
  </a>
<?php endif ?>
