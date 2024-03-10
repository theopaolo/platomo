<?= snippet('header')?>

<main class="lg:container mx-auto mt-20 px-4">
  <?= snippet('pagetitle')?>

  <section class="listing flex flex-col gap-4 mt-20">
    <?php foreach ($page->children()->listed() as $contribution): ?>
      <a class="hover:bg-tertiary md:rounded-full transition-colors duration-300 w-full" href="<?= $contribution->url() ?>">
        <article class="border border-black p-2 md:pl-8 md:rounded-full flex flex-row md:items-center gap-4 justify-between">
          <div class="flex gap-2 md:gap-4 md:items-center flex-col md:flex-row">
            <h2 class="text-subtitle no-effect uppercase"><?= $contribution->title() ?></h2>
            <?php if($user = $contribution->author()->toUser()): ?>
              <p class="text-lg"><?= $user->username() ?></p>
            <?php endif ?>
            <ul class="flex gap-2">
              <?php foreach ($contribution->tags()->split() as $category): ?>
                <li class="text-sm uppercase bg-neutral-950 text-white rounded-full py-1 px-2 h-fit"><?= $category ?></li>
              <?php endforeach ?>
            </ul>
          </div>

          <figure>
          <?php $images = $contribution->images();
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
