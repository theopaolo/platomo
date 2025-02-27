<nav class="relative p-4 z-50" x-data="navComponent()" @click.away="closeNav()">

  <div class="flex justify-between sticky top-2">
    <a href="/" class="flex items-center" data-no-swup>
      <?php if ($asset = asset('/assets/images/logo.svg')): ?>
          <img src="<?= $asset->url() ?>" alt="Logo" class="w-8 h-8">
      <?php endif ?>
      <span class="ml-2 text-xl font-bold text-slate-950 sr-only"><?= $site->title() ?></span>
    </a>

    <button @click="toggleNav"
            :class="{'bg-slate-950 text-white': isOpen, 'bg-white text-black': !isOpen}"
            class="flex items-center border-slate-950 border border-b text-sm font-medium uppercase pl-2 pr-1 py-1 rounded-full hover:bg-slate-950 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-75 group">
      Navigation
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          :class="{'fill-secondary': isOpen, 'rotate-45': isOpen}"
          class="w-8 h-8 ml-2 transition-transform group-hover:rotate-45 group-hover:fill-secondary">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24ZM11.5 6V11.5H6V12.5H11.5V18H12.5V12.5H18V11.5H12.5V6H11.5Z"/>
      </svg>
    </button>
  </div>

  <?php
  $items = $pages->listed();
  if($items->isNotEmpty()):
  ?>
    <ul :class="{ 'navin': isOpen }"
        x-ref="nav"
        class="hidden border-2 bg-secondary rounded-xl p-2 min-w-60 right-4 absolute mt-2 flex-col gap-2 z-[999]">
    <li class="uppercase rounded-full">
      <a class="transition-colors duration-300 hover:bg-white w-full block rounded-full p-2" href="<?= $site->url() ?>">Plateau</a>
    </li>
      <?php foreach($items as $item): ?>
        <li class="uppercase rounded-full">
          <a class="transition-colors duration-300 hover:bg-white w-full block rounded-full p-2" <?php e($item->isOpen(), ' class="active"') ?> href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
        </li>
      <?php endforeach ?>
    </ul>
  <?php endif ?>
</nav>

<script>
  // using swup reset the nav state on page change
  function navComponent() {
        return {
            isOpen: false,
            toggleNav() {
                if (this.isOpen) {
                  this.closeNav();
                } else {
                  this.$refs.nav.classList.remove('hidden');
                  setTimeout(() => {
                    this.isOpen = true;
                  }, 100);
                }
              },
              closeNav() {
                this.$refs.nav.classList.add('navout');
                setTimeout(() => {
                  this.isOpen = false;
                  this.$refs.nav.classList.add('hidden');
                  this.$refs.nav.classList.remove('navout');
                }, 400);
            }
        }
    }
</script>
