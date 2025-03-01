<?= snippet('header')?>

<div class="page-wrapper" id="swup">

  <div class="bg-blur blur-sm"></div>
  <main class="px-3 md:px-8 z-50 relative">
    <?= snippet('page-header', ['page' => $page, 'tagClasses' => 'bg-black text-secondary dark:bg-purple dark:text-neutral-900']) ?>

    <div class="flex gap-4 left-auto justify-between main-content">
      <div class="container max-w-screen-lg mt-4 md:mt-8">

      <?= snippet('content-blocks', ['blocks' => $page->text()->toBlocks()]) ?>

      <?php if($page->extra()->isNotEmpty()): ?>
            <div class="border border-black rounded p-4 mb-4 mt-8">
              <h2 class="uppercase text-subtitle font-medium">Ressources</h2>
              <ul class="flex flex-col gap-2">
                <?php foreach ($page->extra()->toStructure() as $ressource): ?>

                  <?php if($ressource->lien()->isNotEmpty()): ?>
                    <li class="text-sm uppercase leading-none py-1">
                      <a href="<?= $ressource->lien()->toUrl() ?>" target="_blank">
                        <p><?= str_replace('https://', '', $ressource->lien()->name()) ?></p>
                      </a>
                    </li>
                  <?php endif ?>

                  <?php if($ressource->fichier()->isNotEmpty()): ?>
                  <li class="text-sm uppercase leading-none py-1">
                    <a href="<?= $ressource->fichier()->toFile() ?>" target="_blank">
                      <?= $ressource->fichier()->toFile()->name() ?>
                    </a>
                  </li>
                  <?php endif ?>

                <?php endforeach ?>
              </ul>
            </div>
          <?php endif ?>
      </div>

    </div>

    <?= snippet('pagenav')?>
  </main>
</div>

<?= snippet('footer')?>
