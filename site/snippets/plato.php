<div id="board">
  <canvas id="back-layer"></canvas>
  <canvas id="front-layer"></canvas>

  <div id="nodes-container">
    <!--<p>Node #1</p>-->
  </div>

  <div id="dark-mode-toggle" title="Dark/Light mode"></div>

  <div id="search-info">
    <p></p>
  </div>

  <div id="search">

  <div id="filters">
    <div class="filter" data-filter="labo" data-filter-name="Laboratoire" id="filter-labo">
      <h3 class="hover:bg-black hover:text-white transition-colors duration-300">Laboratoires</h3>
      <ul class="filter-tags">
        <li data-tag="1" class="round-btn">Labo #1</li>
      </ul>
    </div>
    <div class="filter" data-filter="category" data-filter-name="Catégorie" id="filter-category">
      <h3 class="hover:bg-black hover:text-white transition-colors duration-300">Catégories</h3>
      <ul class="filter-tags">
        <li data-tag="1" class="round-btn">Objet</li>
      </ul>
    </div>
    <div class="filter" data-filter="author" data-filter-name="Auteur" id="filter-author">
      <h3 class="hover:bg-black hover:text-white transition-colors duration-300">Auteur·e·s</h3>
      <ul class="filter-tags">
        <li data-tag="1" class="round-btn">John Doe</li>
      </ul>
    </div>
    <?php
    $items = $pages->listed();
    if($items->isNotEmpty()):
    ?>

        <?php foreach($items as $item): ?>
          <div class="filter uppercase rounded-full">
            <h3 class="hover:bg-black hover:text-white transition-colors duration-300">
              <a class="w-full block" <?php e($item->isOpen(), ' class="active"') ?> href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
            </h3>
          </div>
        <?php endforeach ?>

    <?php endif ?>
  </div>

  <div id="expand-search">
    <div id="square"></div>
  </div>
</div>
</div>

<?= js('assets/js/plato.js') ?>
<?= css('src/css/plato.css') ?>