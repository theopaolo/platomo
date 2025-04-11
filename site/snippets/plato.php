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

			<div id="exit-nav">
				<svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" >
					<path d="M2.5 64C2.5 30.3589 30.3589 2.5 64 2.5C97.6411 2.5 125.5 30.3589 125.5 64C125.5 97.6411 97.6411 125.5 64 125.5C30.3589 125.5 2.5 97.6411 2.5 64Z" fill="white" stroke="black" stroke-width="4"/>
					<path d="M45 45L64.2132 64.2132M64.2132 64.2132L83.4264 83.4264M64.2132 64.2132L83.4264 45M64.2132 64.2132L45 83.4264" stroke="black" stroke-width="8"/>
				</svg>
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
