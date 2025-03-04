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
  x-data="{
    imageGalleryOpened: false,
    imageGalleryActiveUrl: null,
    imageGalleryActiveAlt: null,
    imageGalleryActiveTitle: null,
    imageGalleryImageIndex: null,
    imageGalleryTotal: <?= count($images) ?>,
    imageGalleryOpen(event) {
      this.imageGalleryImageIndex = parseInt(event.target.dataset.index);
      this.imageGalleryActiveUrl = event.target.src;
      this.imageGalleryActiveAlt = event.target.alt;
      this.imageGalleryActiveTitle = event.target.dataset.title || '';
      this.imageGalleryOpened = true;

      // Set focus trap and announce to screen readers
      this.$nextTick(() => {
        this.$refs.modalContainer.focus();
        this.$refs.srAnnounce.textContent = 'Gallery viewer opened. Image ' +
          this.imageGalleryImageIndex + ' of ' + this.imageGalleryTotal +
          ': ' + this.imageGalleryActiveAlt;
      });
    },
    imageGalleryClose() {
      this.imageGalleryOpened = false;

      // Announce to screen readers
      this.$refs.srAnnounce.textContent = 'Gallery viewer closed';

      // Return focus to the clicked image
      this.$nextTick(() => {
        const clickedImage = this.$refs.gallery.querySelector('[data-index=\'' + this.imageGalleryImageIndex + '\']');
        if (clickedImage) clickedImage.focus();
      });

      setTimeout(() => {
        this.imageGalleryActiveUrl = null;
        this.imageGalleryActiveAlt = null;
        this.imageGalleryActiveTitle = null;
      }, 300);
    },
    imageGalleryNext(){
      this.imageGalleryImageIndex = (this.imageGalleryImageIndex == this.imageGalleryTotal) ? 1 : (parseInt(this.imageGalleryImageIndex) + 1);
      const nextImage = this.$refs.gallery.querySelector('[data-index=\'' + this.imageGalleryImageIndex + '\']');
      this.imageGalleryActiveUrl = nextImage.src;
      this.imageGalleryActiveAlt = nextImage.alt;
      this.imageGalleryActiveTitle = nextImage.dataset.title || '';

      // Announce to screen readers
      this.$refs.srAnnounce.textContent = 'Image ' + this.imageGalleryImageIndex +
        ' of ' + this.imageGalleryTotal + ': ' + this.imageGalleryActiveAlt;
    },
    imageGalleryPrev() {
      this.imageGalleryImageIndex = (this.imageGalleryImageIndex == 1) ? this.imageGalleryTotal : (parseInt(this.imageGalleryImageIndex) - 1);
      const prevImage = this.$refs.gallery.querySelector('[data-index=\'' + this.imageGalleryImageIndex + '\']');
      this.imageGalleryActiveUrl = prevImage.src;
      this.imageGalleryActiveAlt = prevImage.alt;
      this.imageGalleryActiveTitle = prevImage.dataset.title || '';

      // Announce to screen readers
      this.$refs.srAnnounce.textContent = 'Image ' + this.imageGalleryImageIndex +
        ' of ' + this.imageGalleryTotal + ': ' + this.imageGalleryActiveAlt;
    }
  }"
  @image-gallery-next.window="imageGalleryNext()"
  @image-gallery-prev.window="imageGalleryPrev()"
  @keyup.right.window="if(imageGalleryOpened) imageGalleryNext();"
  @keyup.left.window="if(imageGalleryOpened) imageGalleryPrev();"
  @keyup.home.window="if(imageGalleryOpened) { imageGalleryImageIndex = 1; const firstImage = $refs.gallery.querySelector('[data-index=\'1\']'); imageGalleryActiveUrl = firstImage.src; imageGalleryActiveAlt = firstImage.alt; imageGalleryActiveTitle = firstImage.dataset.title || ''; $refs.srAnnounce.textContent = 'First image: ' + imageGalleryActiveAlt; }"
  @keyup.end.window="if(imageGalleryOpened) { imageGalleryImageIndex = imageGalleryTotal; const lastImage = $refs.gallery.querySelector('[data-index=\'' + imageGalleryTotal + '\']'); imageGalleryActiveUrl = lastImage.src; imageGalleryActiveAlt = lastImage.alt; imageGalleryActiveTitle = lastImage.dataset.title || ''; $refs.srAnnounce.textContent = 'Last image: ' + imageGalleryActiveAlt; }"
  class="w-full h-full"
  aria-labelledby="<?= $galleryId ?>-title"
>
  <!-- Screen reader announcements -->
  <div
    x-ref="srAnnounce"
    class="sr-only"
    aria-live="polite"
    aria-atomic="true"
  ></div>

  <!-- Keyboard shortcuts help (hidden until needed) -->
  <div
    x-show="imageGalleryOpened"
    x-cloak
    class="sr-only"
    aria-live="polite"
  >
    Press left and right arrow keys to navigate between images.
    Press Home to go to the first image.
    Press End to go to the last image.
    Press Escape to close the gallery viewer.
  </div>

  <div class="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 ease animate-fade-in-view" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
    <ul
      x-ref="gallery"
      id="<?= $galleryId ?>"
      class="grid grid-cols-2 gap-5 lg:grid-cols-5 mt-4"
      role="list"
      aria-label="<?= $galleryTitle ?>"
    >
      <?php $index = 1; foreach ($images as $image):
        // Get better alt text - use alt field, caption field, or filename as fallback
        $imageAlt = $image->alt()->isNotEmpty()
          ? $image->alt()
          : ($image->caption()->isNotEmpty()
              ? $image->caption()
              : $image->filename());

        // Get image title if available
        $imageTitle = $image->title()->isNotEmpty() ? $image->title() : '';
      ?>
      <li class="relative group" role="listitem">
        <div class="<?= $contain ? 'aspect-auto' : 'aspect-square' ?> bg-gray-100 rounded overflow-hidden">
          <img
            x-on:click="imageGalleryOpen"
            x-on:keydown.enter="imageGalleryOpen"
            x-on:keydown.space.prevent="imageGalleryOpen"
            src="<?= $image->url() ?>"
            alt="<?= $imageAlt ?>"
            <?php if ($imageTitle): ?>data-title="<?= $imageTitle ?>"<?php endif ?>
            data-index="<?= $index ?>"
            class="<?= $contain ? 'object-contain' : 'object-cover' ?> w-full h-full bg-gray-200 rounded cursor-zoom-in transition-all duration-300 hover:brightness-90 focus:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            tabindex="0"
            role="button"
            aria-label="Open image <?= $index ?> of <?= count($images) ?>: <?= $imageAlt ?>"
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
  <!-- Lightbox Modal -->
  <template x-teleport="body">
    <div
      x-show="imageGalleryOpened"
      x-transition:enter="transition ease-in-out duration-300"
      x-transition:enter-start="opacity-0"
      x-transition:leave="transition ease-in-in duration-300"
      x-transition:leave-end="opacity-0"
      @click="imageGalleryClose"
      @keydown.window.escape="imageGalleryClose"
      x-trap.inert.noscroll="imageGalleryOpened"
      class="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-90 cursor-zoom-out"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      x-ref="modalContainer"
      tabindex="-1"
      x-cloak
    >
      <div class="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
        <!-- Previous button -->
        <button
          @click.stop="$event.stopPropagation(); imageGalleryPrev()"
          @keydown.space.prevent="imageGalleryPrev()"
          class="absolute left-0 flex items-center justify-center text-white translate-x-10 hover:rotate-45 transition-transform rounded-full xl:-translate-x-24 2xl:-translate-x-32 focus:outline-none focus:ring-4 focus:ring-white"
          aria-label="Previous image"
        >
          <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M0.499994 64C0.499991 28.9299 28.9299 0.500009 64 0.500006C99.0701 0.500003 127.5 28.9299 127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.499997 99.0701 0.499994 64Z" fill="white" stroke="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M94 39.6572L43.6569 90.0001L94 90.0001V98.0001H30L30 34.0002H38L38 84.3433L88.3431 34.0003L94 39.6572Z" fill="#2E2420"/>
          </svg>
        </button>

        <!-- Main image container -->
        <div class="relative max-w-full max-h-[90vh]">
          <!-- Image title if available -->
          <div
            x-show="imageGalleryActiveTitle"
            id="gallery-modal-title"
            class="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-center"
            x-text="imageGalleryActiveTitle"
          ></div>

          <!-- Main image -->
          <img
            x-show="imageGalleryOpened"
            x-transition:enter="transition ease-in-out duration-300"
            x-transition:enter-start="opacity-0 transform scale-50"
            x-transition:leave="transition ease-in-in duration-300"
            x-transition:leave-end="opacity-0 transform scale-50"
            class="object-contain object-center w-full h-full max-h-[90vh] cursor-zoom-out"
            :src="imageGalleryActiveUrl"
            :alt="imageGalleryActiveAlt"
            style="display: none;"
          >
        </div>

        <!-- Next button -->
        <button
          @click.stop="$event.stopPropagation(); imageGalleryNext()"
          @keydown.space.prevent="imageGalleryNext()"
          class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full hover:rotate-45 transition-transform xl:translate-x-24 2xl:translate-x-32 focus:outline-none focus:ring-4 focus:ring-white"
          aria-label="Next image"
        >
          <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.5 99.0701 0.5 64C0.5 28.9299 28.9299 0.5 64 0.5C99.0701 0.5 127.5 28.9299 127.5 64Z" fill="white" stroke="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34 88.3428L84.3431 37.9999L34 37.9999L34 29.9998L98 29.9999L98 93.9998L90 93.9998L90 43.6567L39.6569 93.9997L34 88.3428Z" fill="#2E2420"/>
          </svg>
        </button>

        <!-- Close button -->
        <button
          @click="imageGalleryClose"
          @keydown.space.prevent="imageGalleryClose"
          class="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white"
          aria-label="Close gallery viewer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Image counter and controls help -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full flex items-center gap-2">
          <span x-text="imageGalleryImageIndex"></span> / <span x-text="imageGalleryTotal"></span>
          <button
            @click.stop
            class="ml-2 text-xs underline focus:outline-none focus:ring-2 focus:ring-white rounded"
            @mouseenter="$refs.keyboardHelp.classList.remove('hidden')"
            @mouseleave="$refs.keyboardHelp.classList.add('hidden')"
            @focus="$refs.keyboardHelp.classList.remove('hidden')"
            @blur="$refs.keyboardHelp.classList.add('hidden')"
            aria-label="Keyboard shortcuts"
          >
            Keyboard shortcuts
          </button>
          <div
            x-ref="keyboardHelp"
            class="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-black bg-opacity-90 text-white text-xs rounded w-64"
          >
            <ul class="list-disc pl-4 space-y-1">
              <li>Left/Right arrows: Navigate images</li>
              <li>Home/End: First/Last image</li>
              <li>Escape: Close viewer</li>
              <li>Space/Enter: Activate buttons</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
</figure>
