<?= snippet('header')?>

<div class="px-8 pt-10 z-50 border border-black max-w-screen-xl rounded-xl mx-auto transition-fade" id="swup">
  <main>
    <header class="max-w-screen-xl left-auto">
      <h1 class="uppercase text-page-title font-medium leading-none"><?= $page->title() ?></h1>
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
        <?= snippet('player')?>
      </div>
      <aside class="sticky top-4 h-fit">
          <?php if($page->extra()->isNotEmpty()): ?>
            <div class="border border-black rounded-xl p-4 ">
              <h2 class="uppercase text-subtitle font-medium">Ressources</h2>
              <ul class="flex flex-col gap-2 mt-2">
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

          <div class="next-prev flex flex-col gap-4 mt-4">

            <?php if($next = $page->nextListed()): ?>
              <a href="<?= $next->url() ?>">
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.5 99.0701 0.5 64C0.5 28.9299 28.9299 0.5 64 0.5C99.0701 0.5 127.5 28.9299 127.5 64Z" fill="white" stroke="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M34 88.3428L84.3431 37.9999L34 37.9999L34 29.9998L98 29.9999L98 93.9998L90 93.9998L90 43.6567L39.6569 93.9997L34 88.3428Z" fill="#2E2420"/>
                </svg>
              </a>
            <?php endif ?>

            <?php if($prev = $page->prevListed()): ?>
              <a href="<?= $prev->url() ?>">
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.499994 64C0.499991 28.9299 28.9299 0.500009 64 0.500006C99.0701 0.500003 127.5 28.9299 127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.499997 99.0701 0.499994 64Z" fill="white" stroke="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M94 39.6572L43.6569 90.0001L94 90.0001V98.0001H30L30 34.0002H38L38 84.3433L88.3431 34.0003L94 39.6572Z" fill="#2E2420"/>
                </svg>
              </a>
            <?php endif ?>

            <?php $random = $page->siblings()->listed()->shuffle()->first(); ?>
            <?php if($random): ?>
              <a href="<?= $random->url() ?>">
              <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.499994 64C0.499991 28.9299 28.9299 0.500009 64 0.500006C99.0701 0.500003 127.5 28.9299 127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.499997 99.0701 0.499994 64Z" fill="white" stroke="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M42 26H86C94.8366 26 102 33.1634 102 42V86C102 94.8366 94.8366 102 86 102H42C33.1634 102 26 94.8366 26 86V42C26 33.1634 33.1634 26 42 26ZM42 34C37.5817 34 34 37.5817 34 42V86C34 90.4183 37.5817 94 42 94H86C90.4183 94 94 90.4183 94 86V42C94 37.5817 90.4183 34 86 34H42Z" fill="black"/>
                <path d="M57.0004 53.0002C57.0004 55.2093 55.2096 57.0002 53.0004 57.0002C50.7913 57.0002 49.0004 55.2093 49.0004 53.0002C49.0004 50.791 50.7913 49.0002 53.0004 49.0002C55.2096 49.0002 57.0004 50.791 57.0004 53.0002Z" fill="black"/>
                <path d="M79.0004 53.0002C79.0004 55.2093 77.2096 57.0002 75.0004 57.0002C72.7913 57.0002 71.0004 55.2093 71.0004 53.0002C71.0004 50.791 72.7913 49.0002 75.0004 49.0002C77.2096 49.0002 79.0004 50.791 79.0004 53.0002Z" fill="black"/>
                <path d="M79.0004 75.0002C79.0004 77.2093 77.2096 79.0002 75.0004 79.0002C72.7913 79.0002 71.0004 77.2093 71.0004 75.0002C71.0004 72.791 72.7913 71.0002 75.0004 71.0002C77.2096 71.0002 79.0004 72.791 79.0004 75.0002Z" fill="black"/>
                <path d="M57.0004 75.0002C57.0004 77.2093 55.2096 79.0002 53.0004 79.0002C50.7913 79.0002 49.0004 77.2093 49.0004 75.0002C49.0004 72.791 50.7913 71.0002 53.0004 71.0002C55.2096 71.0002 57.0004 72.791 57.0004 75.0002Z" fill="black"/>
                <path d="M68.0004 64.0002C68.0004 66.2093 66.2096 68.0002 64.0004 68.0002C61.7913 68.0002 60.0004 66.2093 60.0004 64.0002C60.0004 61.791 61.7913 60.0002 64.0004 60.0002C66.2096 60.0002 68.0004 61.791 68.0004 64.0002Z" fill="black"/>
              </svg>
            </a>
            <?php endif ?>
          </div>
      </aside>
    </div>
  </main>
</div>

<?= snippet('footer')?>
