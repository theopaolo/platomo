<header class="left-auto">
  <div class="flex gap-4 mt-4 md:mt-8 justify-between">
    <h1 class="uppercase text-page-title font-medium leading-none"><?= $page->title() ?></h1>

    <div class="go-back group cursor-pointer hidden">
      <span class="sr-only">retour</span>
      <svg class="group-hover:rotate-90 go-back transition-transform" width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="dark:fill-neutral-900 dark:stroke-white" d="M0.499994 64C0.499991 28.9299 28.9299 0.500009 64 0.500006C99.0701 0.500003 127.5 28.9299 127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.499997 99.0701 0.499994 64Z" fill="white" stroke="black"/>
        <path class="dark:fill-neutral-900 dark:stroke-white" d="M43 43L64.2132 64.2132M64.2132 64.2132L85.4264 85.4264M64.2132 64.2132L85.4264 43M64.2132 64.2132L43 85.4264" stroke="black" stroke-width="8"/>
      </svg>
    </div>

  </div>
  <?php if($user = $page->author()->toUser()): ?>
    <p class="text-subtitle uppercase mt-6"><?= $user->username() ?></p>
  <?php endif ?>

  <ul class="flex gap-2 mt-6">
    <?php foreach ($page->tags()->split() as $category): ?>
      <li class="category text-base uppercase leading-none <?= isset($tagClasses) ? $tagClasses : 'bg-purple dark:bg-neutral-700' ?> rounded-full py-1 px-4"><?= $category ?></li>
    <?php endforeach ?>
  </ul>
</header>
