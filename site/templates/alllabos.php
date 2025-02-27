<?= snippet('header')?>

<main class="container mx-auto mt-20 px-4">
  <?= snippet('pagetitle')?>

  <section class="listing flex flex-col gap-4 mt-20">
    <?php foreach ($page->children()->listed() as $labo): ?>
      <a class="hover:bg-tertiary rounded-full transition-colors duration-300" href="<?= $labo->url() ?>">
        <article class="border border-black p-2 pl-8 rounded-full flex items-center gap-4">
          <h2 class="text-subtitle no-effect uppercase"><?= $labo->title() ?></h2>
          <?php if($user = $labo->author()->toUser()): ?>
            <p class="text-lg"><?= $user->username() ?></p>
          <?php endif ?>
          <ul class="flex gap-2">
            <?php foreach ($labo->tags()->split() as $category): ?>
              <li class="text-sm uppercase leading-none bg-purple rounded-full py-1 px-2"><?= $category ?></li>
            <?php endforeach ?>
          </ul>

          <!-- Display associated contributions count -->
          <?php $contributions = $labo->contributions()->toPages(); if($contributions->isNotEmpty()): ?>
            <p class="text-sm uppercase leading-none bg-neutral-200 rounded-full py-1 px-4">
              <?= $contributions->count() ?> contribution<?= $contributions->count() > 1 ? 's' : '' ?>
            </p>
          <?php endif ?>

          <figure class="ml-auto">
          <?php $images = $labo->images();
            if($images->isNotEmpty()):
                $firstImage = $images->first();
            ?>
                <img class="lazyload w-14 h-14 object-cover rounded-full" src="<?= $firstImage->url() ?>" alt="<?= $firstImage->alt() ?>">
            <?php else: ?>
              <div class="w-14 h-14 rounded-full bg-transparent"></div>
            <?php endif ?>
          </figure>
        </article>
      </a>
    <?php endforeach ?>
  </section>

</main>

<?= snippet('footer')?>
