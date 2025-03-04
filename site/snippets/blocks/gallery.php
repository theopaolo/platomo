<?php
/** @var \Kirby\Cms\Block $block */
$caption = $block->caption();
$crop    = $block->crop()->isTrue();
$ratio   = $block->ratio()->or('auto');
$images  = $block->images()->toFiles();
?>
<figure <?= Html::attr(['data-ratio' => $ratio, 'data-crop' => $crop], null, ' ') ?>
  x-data="{
    imageGalleryOpened: false,
    imageGalleryActiveUrl: null,
    imageGalleryImageIndex: null,
    imageGalleryOpen(event) {
      this.imageGalleryImageIndex = event.target.dataset.index;
      this.imageGalleryActiveUrl = event.target.src;
      this.imageGalleryOpened = true;
    },
    imageGalleryClose() {
      this.imageGalleryOpened = false;
      setTimeout(() => this.imageGalleryActiveUrl = null, 300);
    },
    imageGalleryNext(){
      this.imageGalleryImageIndex = (this.imageGalleryImageIndex == <?= count($images) ?>) ? 1 : (parseInt(this.imageGalleryImageIndex) + 1);
      this.imageGalleryActiveUrl = this.$refs.gallery.querySelector('[data-index=\'' + this.imageGalleryImageIndex + '\']').src;
    },
    imageGalleryPrev() {
      this.imageGalleryImageIndex = (this.imageGalleryImageIndex == 1) ? <?= count($images) ?> : (parseInt(this.imageGalleryImageIndex) - 1);
      this.imageGalleryActiveUrl = this.$refs.gallery.querySelector('[data-index=\'' + this.imageGalleryImageIndex + '\']').src;
    }
  }"
  @image-gallery-next.window="imageGalleryNext()"
  @image-gallery-prev.window="imageGalleryPrev()"
  @keyup.right.window="imageGalleryNext();"
  @keyup.left.window="imageGalleryPrev();"
  class="w-full h-full select-none">

  <div class="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
    <ul x-ref="gallery" id="gallery" class="grid grid-cols-2 gap-5 lg:grid-cols-5 mt-4">
      <?php $index = 1; foreach ($images as $image): ?>
      <li class="relative">
        <img
          x-on:click="imageGalleryOpen"
          src="<?= $image->url() ?>"
          alt="<?= $image->alt()->or($image->filename()) ?>"
          data-index="<?= $index ?>"
          class="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 fill-secondary absolute right-2 bottom-2 cursor-pointer" x-on:click="imageGalleryOpen">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM11.5 6V11.5H6V12.5H11.5V18H12.5V12.5H18V11.5H12.5V6H11.5Z"/>
          </svg> -->
        </li>
      <?php $index++; endforeach ?>
    </ul>
  </div>

  <?php if ($caption->isNotEmpty()): ?>
  <figcaption class="mt-2 text-center text-gray-600 dark:text-neutral-300">
    <?= $caption ?>
  </figcaption>
  <?php endif ?>

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
      class="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-80 select-none cursor-zoom-out"
      x-cloak>
      <div class="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
        <div
          @click="$event.stopPropagation(); $dispatch('image-gallery-prev')"
          class="absolute left-0 flex items-center justify-center text-white translate-x-10 hover:rotate-45 transition-transform rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32">
          <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.499994 64C0.499991 28.9299 28.9299 0.500009 64 0.500006C99.0701 0.500003 127.5 28.9299 127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.499997 99.0701 0.499994 64Z" fill="white" stroke="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M94 39.6572L43.6569 90.0001L94 90.0001V98.0001H30L30 34.0002H38L38 84.3433L88.3431 34.0003L94 39.6572Z" fill="#2E2420"/>
          </svg>
        </div>

        <img
          x-show="imageGalleryOpened"
          x-transition:enter="transition ease-in-out duration-300"
          x-transition:enter-start="opacity-0 transform scale-50"
          x-transition:leave="transition ease-in-in duration-300"
          x-transition:leave-end="opacity-0 transform scale-50"
          class="object-contain object-center w-full h-full max-h-[90vh] select-none cursor-zoom-out"
          :src="imageGalleryActiveUrl"
          alt=""
          style="display: none;">

        <div
          @click="$event.stopPropagation(); $dispatch('image-gallery-next');"
          class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer hover:rotate-45 transition-transform xl:translate-x-24 2xl:translate-x-32">
          <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.5 99.0701 0.5 64C0.5 28.9299 28.9299 0.5 64 0.5C99.0701 0.5 127.5 28.9299 127.5 64Z" fill="white" stroke="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34 88.3428L84.3431 37.9999L34 37.9999L34 29.9998L98 29.9999L98 93.9998L90 93.9998L90 43.6567L39.6569 93.9997L34 88.3428Z" fill="#2E2420"/>
          </svg>
        </div>
      </div>
    </div>
  </template>
</figure>
