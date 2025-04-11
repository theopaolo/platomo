<!-- Shared Lightbox Component -->
<div
  x-data
  x-show="$store.sharedLightbox.isOpen"
  x-transition:enter="transition ease-in-out duration-300"
  x-transition:enter-start="opacity-0"
  x-transition:leave="transition ease-in-in duration-300"
  x-transition:leave-end="opacity-0"
  @click="$store.sharedLightbox.close()"
  @keydown.window.escape="$store.sharedLightbox.close()"
  x-trap.inert.noscroll="$store.sharedLightbox.isOpen"
  class="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-90 cursor-zoom-out"
  role="dialog"
  aria-modal="true"
  aria-labelledby="lightbox-title"
  x-ref="modalContainer"
  tabindex="-1"
  x-cloak
>
  <div class="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
    <!-- Previous button -->
    <button
      @click.stop="$event.stopPropagation(); $store.sharedLightbox.prev()"
      @keydown.space.prevent="$store.sharedLightbox.prev()"
      class="absolute left-0 flex items-center justify-center text-white translate-x-10 hover:rotate-45 transition-transform rounded-full xl:-translate-x-24 2xl:-translate-x-32 focus:outline-none focus:ring-4 focus:ring-white"
      aria-label="Previous image"
      x-show="$store.sharedLightbox.currentGalleryImages.length > 1"
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
        x-show="$store.sharedLightbox.currentImage?.title"
        id="lightbox-title"
        class="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-center"
        x-text="$store.sharedLightbox.currentImage?.title"
      ></div>

      <!-- Main image -->
      <img
        x-show="$store.sharedLightbox.isOpen"
        x-transition:enter="transition ease-in-out duration-300"
        x-transition:enter-start="opacity-0 transform scale-50"
        x-transition:leave="transition ease-in-in duration-300"
        x-transition:leave-end="opacity-0 transform scale-50"
        class="object-contain object-center w-full h-full max-h-[90vh] cursor-zoom-out"
        :src="$store.sharedLightbox.currentImage?.url"
        :alt="$store.sharedLightbox.currentImage?.alt"
        style="display: none;"
      >
    </div>

    <!-- Next button -->
    <button
      @click.stop="$event.stopPropagation(); $store.sharedLightbox.next()"
      @keydown.space.prevent="$store.sharedLightbox.next()"
      class="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full hover:rotate-45 transition-transform xl:translate-x-24 2xl:translate-x-32 focus:outline-none focus:ring-4 focus:ring-white"
      aria-label="Next image"
      x-show="$store.sharedLightbox.currentGalleryImages.length > 1"
    >
      <svg width="42" height="42" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M127.5 64C127.5 99.0701 99.0701 127.5 64 127.5C28.9299 127.5 0.5 99.0701 0.5 64C0.5 28.9299 28.9299 0.5 64 0.5C99.0701 0.5 127.5 28.9299 127.5 64Z" fill="white" stroke="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 88.3428L84.3431 37.9999L34 37.9999L34 29.9998L98 29.9999L98 93.9998L90 93.9998L90 43.6567L39.6569 93.9997L34 88.3428Z" fill="#2E2420"/>
      </svg>
    </button>

    <!-- Close button -->
    <button
      @click="$store.sharedLightbox.close()"
      @keydown.space.prevent="$store.sharedLightbox.close()"
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
      <span x-text="$store.sharedLightbox.currentIndex + 1"></span> / <span x-text="$store.sharedLightbox.currentGalleryImages.length"></span>
      <button
        @click.stop
        class="ml-2 text-xs underline focus:outline-none focus:ring-2 focus:ring-white rounded sr-only"
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

  <!-- Screen reader announcements -->
  <div
    x-ref="srAnnounce"
    class="sr-only"
    aria-live="polite"
    aria-atomic="true"
  ></div>
</div>