
<?php snippet('header') ?>

<section class="container mx-auto flex gap-4">
  <?php
    $contributionsPage = $site->find('contributions');
    foreach($contributionsPage->children() as $contribution):
  ?>
    <a data-swup-transition=" " class="hover:bg-tertiary rounded-full transition-colors duration-300" href="<?= $contribution->url() ?>">
        <article class="border border-black p-1 px-4 rounded-full flex items-center gap-4">
            <h2 class="text-base uppercase"><?= $contribution->title() ?></h2>
        </article>
    </a>
  <?php endforeach ?>
</section>


<div class="absolute top-0 left-0">
  <?php snippet('plato') ?>
</div>

<div id="swup"> </div>

<?php snippet('footer') ?>
