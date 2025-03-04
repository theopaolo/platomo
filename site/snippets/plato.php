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

	<div id="bottom-items" class="search-toggle-off">

		<div id="search">

			<div id="filters-nav">
				<div class="rounded-btn">
					<h3>Navigation</h3>
				</div>
			</div>

			<div id="exit-nav" class="rounded-btn">
				<h3>X</h3>
			</div>

			<div id="filters">

				<ul id="main-filters">
					<li class="filter rounded-btn" data-filter="labo" data-filter-name="Laboratoire" id="filter-labo">
						<h3>Laboratoires</h3>
					</li>
					<li class="filter rounded-btn" data-filter="category" data-filter-name="Catégorie" id="filter-category">
						<h3>Catégories</h3>
					</li>
					<li class="filter rounded-btn" data-filter="author" data-filter-name="Auteur" id="filter-author">
						<h3>Auteur·e·s</h3>
					</li>
				</ul>

				<div id="filter-tags">

					<ul id="filters-labo">
						<li data-tag="57" class="rounded-btn"><h3>Incroyable</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Incroyable</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Incroyable</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Incroyable</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Incroyable</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Incroyable</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Incroyable</h3></li>
					</ul>

					<ul id="filters-category">
						<li data-tag="57" class="rounded-btn"><h3>Ouf</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Ouf</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Ouf</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Ouf</h3></li>
					</ul>

					<ul id="filters-author">
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
						<li data-tag="57" class="rounded-btn"><h3>Indicible</h3></li>
					</ul>

				</div>
			</div>

		</div>

		<nav id="pages">
			<?php
			$items = $pages->listed();
			if($items->isNotEmpty()):
			?>
				<?php foreach($items as $item): ?>
					<div class="page-link uppercase rounded-btn">
						<h3>
							<a class="w-full block" data-no-swup  <?php e($item->isOpen(), ' class="active"') ?> href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
						</h3>
					</div>
				<?php endforeach ?>

			<?php endif ?>
		</nav>
	</div>



</div>

<?= js('assets/js/plato.js') ?>
<?= css('assets/css/plato.css') ?>
