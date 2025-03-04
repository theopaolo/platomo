<?php

/** @var \Kirby\Cms\Block $block */
$alt     = $block->alt();
$caption = $block->caption();
$crop    = $block->crop()->isTrue();
$link    = $block->link();
$ratio   = $block->ratio()->or('auto');
$src     = null;

if ($block->location() == 'web') {
	$src = $block->src()->esc();
} elseif ($image = $block->image()->toFile()) {
	$alt = $alt->or($image->alt());
	$src = $image->url();
}

?>
<?php if ($src): ?>
<figure<?= Html::attr(['data-ratio' => $ratio, 'data-crop' => $crop], null, ' ') ?>
  x-data="{
    imageOpened: false,
    imageUrl: '<?= $src ?>',
    openImage() {
      this.imageOpened = true;
    },
    closeImage() {
      this.imageOpened = false;
    }
  }"
  @keyup.escape.window="closeImage()"
  class="w-full select-none">

  <?php if ($link->isNotEmpty()): ?>
  <a href="<?= Str::esc($link->toUrl()) ?>">
    <img src="<?= $src ?>" alt="<?= $alt->esc() ?>" class="w-full h-auto bg-gray-200 rounded">
  </a>
  <?php else: ?>
  <img
    x-on:click="openImage"
    src="<?= $src ?>"
    alt="<?= $alt->esc() ?>"
    class="w-full h-auto bg-gray-200 rounded cursor-zoom-in">
  <?php endif ?>

  <?php if ($caption->isNotEmpty()): ?>
  <figcaption class="text-sm mt-2 text-center text-neutral-600 dark:text-neutral-200">
    <?= $caption ?>
  </figcaption>
  <?php endif ?>

  <template x-teleport="body">
    <div
      x-show="imageOpened"
      x-transition:enter="transition ease-in-out duration-300"
      x-transition:enter-start="opacity-0"
      x-transition:leave="transition ease-in-in duration-300"
      x-transition:leave-end="opacity-0"
      @click="closeImage"
      @keydown.window.escape="closeImage"
      x-trap.inert.noscroll="imageOpened"
      class="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-80 select-none cursor-zoom-out"
      x-cloak>
      <div class="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
        <img
          x-show="imageOpened"
          x-transition:enter="transition ease-in-out duration-300"
          x-transition:enter-start="opacity-0 transform scale-50"
          x-transition:leave="transition ease-in-in duration-300"
          x-transition:leave-end="opacity-0 transform scale-50"
          class="object-contain object-center w-full h-full max-h-[90vh] select-none cursor-zoom-out"
          :src="imageUrl"
          alt="<?= $alt->esc() ?>"
          style="display: none;">
      </div>
    </div>
  </template>
</figure>
<?php endif ?>
