<?php
  /** @var \Kirby\Cms\Block $block */
  $caption = $block->caption();
  $crop    = $block->crop()->isTrue();
  $ratio   = $block->ratio()->or('auto');
  $contain = $block->contain()->isTrue();
  $images  = $block->images()->toFiles();
  $galleryId = uniqid('gallery-');
  $galleryTitle = $caption->isNotEmpty() ? $caption : 'Image gallery';
?>

<figure
  <?= Html::attr(['data-ratio' => $ratio, 'data-crop' => $crop, 'data-contain' => $contain], null, ' ') ?>
  class="w-full h-full"
  aria-labelledby="<?= $galleryId ?>-title"
>
  <div class="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 ease animate-fade-in-view" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
    <ul
      id="<?= $galleryId ?>"
      class="grid grid-cols-2 gap-5 lg:grid-cols-5 mt-4"
      role="list"
      aria-label="<?= $galleryTitle ?>"
    >
      <?php $index = 0; foreach ($images as $image):
        $imageAlt = $image->alt()->isNotEmpty()
          ? $image->alt()
          : ($image->caption()->isNotEmpty()
              ? $image->caption()
              : $image->filename());
      ?>

      <li class="relative group" role="listitem">
        <div class="<?= $contain ? 'aspect-auto' : 'aspect-square' ?> bg-gray-100 rounded overflow-hidden">
          <img
            src="<?= $image->url() ?>"
            alt="<?= $imageAlt ?>"
            class="<?= $contain ? 'object-contain' : 'object-cover' ?> w-full h-full bg-gray-200 rounded cursor-zoom-in transition-all duration-300 hover:brightness-90 focus:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            tabindex="0"
            role="button"
            aria-label="Open image <?= $index + 1 ?> of <?= count($images) ?>: <?= $imageAlt ?>"
          >
        </div>
        <?php if ($image->caption()->isNotEmpty()): ?>
        <div class="mt-1 text-xs text-gray-600 dark:text-gray-300">
          <?= $image->caption() ?>
        </div>
        <?php endif ?>
      </li>
      <?php $index++; endforeach ?>
    </ul>
  </div>

  <?php if ($caption->isNotEmpty()): ?>
  <figcaption id="<?= $galleryId ?>-title" class="text-sm mt-2 text-center text-neutral-600 dark:text-neutral-200">
    <?= $caption ?>
  </figcaption>
  <?php endif ?>
</figure>
