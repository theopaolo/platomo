<header class="left-auto">
  <h1 class="uppercase text-page-title font-medium leading-none mt-4 md:mt-8"><?= $page->title() ?></h1>

  <?php if($user = $page->author()->toUser()): ?>
    <p class="text-subtitle uppercase mt-6"><?= $user->username() ?></p>
  <?php endif ?>

  <ul class="flex gap-2 mt-6">
    <?php foreach ($page->tags()->split() as $category): ?>
      <li class="text-base uppercase leading-none <?= isset($tagClasses) ? $tagClasses : 'bg-purple dark:bg-neutral-700' ?> rounded-full py-1 px-4"><?= $category ?></li>
    <?php endforeach ?>
  </ul>
</header>
