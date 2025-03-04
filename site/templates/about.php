<?= snippet('header')?>
<div class="page-wrapper" id="swup">
  <main class="px-4 mt-20">
    <header class="left-auto">
      <?= snippet('pagetitle')?>

      <?php if($user = $page->author()->toUser()): ?>
        <p class="text-subtitle uppercase mt-6"><?= $user->username() ?></p>
      <?php endif ?>

      <ul class="flex gap-2 mt-6">
        <?php foreach ($page->tags()->split() as $category): ?>
          <li class="text-base uppercase leading-none bg-purple rounded-full py-1 px-4"><?= $category ?></li>
        <?php endforeach ?>
      </ul>
    </header>

    <div class="flex gap-4 left-auto justify-between">
      <div class="container max-w-screen-lg mt-8">
        <?php foreach ($page->text()->toBlocks() as $block): ?>
          <div id="<?= $block->id() ?>" class="block block-type-<?= $block->type() ?>">
          <?php if ($block->type() == 'button'): ?>
                <a href="<?= $block->link() ?>" class="flex items-center gap-4 w-fit rounded-full py-1 pl-4 pr-1 border my-2 border-black">
                    <?= $block->text() ?>
                    <span>
                      <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.5 99.0701 0.5 64C0.5 28.9299 28.9299 0.5 64 0.5C99.0701 0.5 127.5 28.9299 127.5 64Z" fill="white" stroke="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 88.3428L84.3431 37.9999L34 37.9999L34 29.9998L98 29.9999L98 93.9998L90 93.9998L90 43.6567L39.6569 93.9997L34 88.3428Z" fill="#2E2420"/>
                      </svg>
                    </span>
                </a>
            <?php else: ?>
                <?= $block ?>
            <?php endif ?>
          </div>
        <?php endforeach ?>
      </div>
    </div>
  </main>
</div>
<?= snippet('footer')?>
