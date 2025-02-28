<?= snippet('header')?>
<?php $total = $page->children()->listed()->count() ?>
<main class="lg:container mx-auto mt-8 md:mt-20 px-4">
  <?= snippet('pagetitle', ['total' => $total])?>

  <section class="listing flex flex-col gap-4 mt-8 md:mt-20">
    <?php foreach ($page->children()->listed() as $labo): ?>
      <a class="hover:bg-secondary bg-white rounded-full transition-colors duration-300 w-full" href="<?= $labo->url() ?>">
        <article class="p-2 px-4 rounded-full">

            <div class="flex flex-row items-center gap-2 md:gap-4 justify-between w-max md:w-full">
              <h2 class="text-sm md:text-subtitle no-effect uppercase font-medium darl dark:text-black"><?= $labo->title() ?></h2>

              <?php if($user = $labo->author()->toUser()): ?>
                <p class="text-sm md:text-base rounded-full border border-black py-1 px-2 md:px-4 w-fit"><?= $user->username() ?></p>
              <?php endif ?>

              <ul class="flex gap-2">
                <?php foreach ($labo->tags()->split() as $category): ?>
                  <li class="text-sm uppercase bg-neutral-950 text-white rounded-full py-1 px-4 h-fit"><?= $category ?></li>
                <?php endforeach ?>
              </ul>

            <!-- Display associated contributions count -->
            <?php $contributions = $labo->contributions()->toPages(); if($contributions->isNotEmpty()): ?>
              <p class="text-sm uppercase bg-neutral-200 rounded-full py-1 px-4 h-fit dark:text-black">
                <?= $contributions->count() ?> contribution<?= $contributions->count() > 1 ? 's' : '' ?>
              </p>
            <?php else: ?>
              <p class="text-sm uppercase bg-neutral-200 rounded-full py-1 px-4 dark:text-black"> 0 contribution</p>
            <?php endif ?>
            </div>
        </article>
      </a>
    <?php endforeach ?>
  </section>

</main>

<?= snippet('footer')?>
