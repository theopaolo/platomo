<?= snippet('header')?>
<?php $total = $page->children()->listed()->count() ?>
<main class="lg:container mx-auto mt-8 md:mt-20 px-4">
  <?= snippet('pagetitle', ['total' => $total])?>

  <section class="listing flex flex-col gap-4 mt-8 md:mt-20">
    <?php foreach ($page->children()->listed() as $contribution): ?>
      <a class="hover:bg-secondary bg-white rounded-full transition-colors duration-300 w-full" href="<?= $contribution->url() ?>">
        <article class="p-2 px-4 rounded-full overflow-scroll">
            <div class="flex flex-row items-center gap-2 md:gap-4 justify-between w-max md:w-full">

              <h2 class="text-sm md:text-subtitle no-effect uppercase font-medium"><?= $contribution->title() ?></h2>

              <?php if($user = $contribution->author()->toUser()): ?>
                <p class="text-sm md:text-base rounded-full border border-black py-1 px-2 md:px-4 w-fit"><?= $user->username() ?></p>
              <?php endif ?>

              <p class="text-sm uppercase bg-neutral-950 text-white rounded-full py-1 px-4 h-fit ml-auto"><?= $contribution->tags() ?></p>

              <?php $labos = $contribution->labos()->toPages(); if($labos->isNotEmpty()): ?>
                <?php foreach($labos as $labo): ?>
                    <p class="text-sm md:text-sub text-black uppercase font-base inline-block"><?= $labo->title() ?></p>
                <?php endforeach ?>
              <?php endif ?>
            </div>
        </article>
      </a>
    <?php endforeach ?>
  </section>

</main>

<?= snippet('footer')?>
