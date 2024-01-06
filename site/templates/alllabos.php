<?= snippet('header')?>

<main class="container mx-auto mt-20 px-4">
  <?= snippet('pagetitle')?>

  <section class="listing flex flex-col gap-4 mt-20">
    <?php foreach ($page->children()->listed() as $contribution): ?>
      <a class="hover:bg-tertiary rounded-full transition-colors duration-300" href="<?= $contribution->url() ?>">
        <article class="border border-black p-2 pl-8 rounded-full flex items-center gap-4">
          <h2 class="text-subtitle uppercase"><?= $contribution->title() ?></h2>
          <?php if($user = $contribution->author()->toUser()): ?>
            <p class="text-lg"><?= $user->username() ?></p>
          <?php endif ?>
          <ul class="flex gap-2">
            <?php foreach ($contribution->tags()->split() as $category): ?>
              <li class="text-sm uppercase leading-none bg-purple rounded-full py-1 px-2"><?= $category ?></li>
            <?php endforeach ?>
          </ul>
          <figure class="ml-auto">
          <?php $images = $contribution->images();
            if($images->isNotEmpty()):
                $firstImage = $images->first();
            ?>
                <img class="w-14 h-14 object-cover rounded-full" src="<?= $firstImage->url() ?>" alt="<?= $firstImage->alt() ?>">
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
