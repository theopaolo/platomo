
<?php snippet('header') ?>

<section class="intro-overlay bg-blur grid place-content-center z-50 absolute" id="intro-section">
  <p class="max-w-screen-lg text-xl leading-relaxed"><?= $site->introtext() ?></p>
  <button class="enter-btn border uppercase px-4 py-1 text-sm w-fit mt-4 rounded-full mx-auto border-neutral-800 hover:bg-neutral-800 hover:text-neutral-50">Explorer</button>
</section>

<div class="absolute top-0 left-0">
  <?php snippet('plato') ?>
</div>

<div id="swup"> </div>

<?php snippet('footer') ?>
