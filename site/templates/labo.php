<?= snippet('header')?>

<div class="page-wrapper" id="swup">
  <div class="bg-blur blur-sm"></div>
  <main class="px-3 md:px-8 z-50 dark:text-white">
    <?= snippet('page-header', ['page' => $page, 'tagClasses' => 'bg-purple dark:bg-neutral-700']) ?>

    <div class="flex gap-4 left-auto justify-between">
      <div class="container max-w-screen-lg mt-8">
        <?= snippet('content-blocks', ['blocks' => $page->text()->toBlocks()]) ?>

        <!-- Participants list -->
        <h2 class="text-paragraph-title font-medium mt-8">Participants</h2>
        <ul class="flex gap-2 flex-wrap mt-4">
            <?php foreach($page->participants()->toUsers() as $user): ?>
                <li class="rounded-full border border-black dark:border-white py-1 px-4 w-fit"><?= $user->name() ?></li>
            <?php endforeach ?>
        </ul>

        <!-- Contributions list -->
        <section class="flex flex-col gap-1 mt-8">
        <h2 class="text-paragraph-title font-medium">Contributions</h2>
          <?php foreach($page->contributions()->toPages() as $contribution): ?>
            <a class="group hover:bg-secondary bg-neutral-100 border rounded-full transition-colors duration-300 w-full dark:hover:bg-neutral-900 dark:hover:border-white" href="<?= $contribution->url() ?>">
              <article class="p-2 px-4 rounded-full overflow-x-scroll md:overflow-hidden contribution-pill">

                <div class="flex flex-row items-center gap-2 md:gap-4 justify-between w-full whitespace-nowrap">
                  <h2 class="text-sm md:text-subtitle no-effect uppercase font-medium dark:text-black dark:group-hover:text-white"><?= $contribution->title() ?></h2>

                  <?php if($user = $contribution->author()->toUser()): ?>
                    <p class="text-sm rounded-full border border-black dark:border-black dark:group-hover:border-white dark:text-black dark:group-hover:text-white py-1 px-2 md:px-4 w-fit"><?= $user->username() ?></p>
                  <?php endif ?>

                  <p class="text-sm uppercase bg-neutral-200 dark:bg-neutral-200 dark:text-black rounded-full py-1 px-4 h-fit ml-auto"><?= $contribution->tags() ?></p>

                  <?php $labos = $contribution->labos()->toPages(); if($labos->isNotEmpty()): ?>
                    <?php foreach($labos as $labo): ?>
                        <p class="text-sm md:text-sub text-black dark:text-black uppercase font-base inline-block dark:group-hover:text-white"><?= $labo->title() ?></p>
                    <?php endforeach ?>
                  <?php endif ?>
                </div>

              </article>
            </a>
          <?php endforeach ?>
        </section>

        <!-- Gallery blocks -->
        <?php foreach($page->gallery()->toBlocks() as $block): ?>
            <?php if($block->_key() == 'gallery'): ?>
                <?php foreach($block->images()->toFiles() as $image): ?>
                    <img class="lazyload" src="<?= $image->url() ?>" alt="<?= $image->alt()->or($image->filename()) ?>">
                <?php endforeach ?>
            <?php endif ?>
        <?php endforeach ?>

        <?php foreach ($page->gallery()->toBlocks() as $block): ?>
          <div id="<?= $block->id() ?>" class="block block-type-<?= $block->type() ?>">
            <?= $block ?>
          </div>
        <?php endforeach ?>
      </div>

    </div>

    <?= snippet('pagenav')?>
  </main>
</div>

<?= snippet('footer')?>
