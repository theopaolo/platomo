<?php foreach ($blocks as $block): ?>
  <div id="<?= $block->id() ?>" class="block block-type-<?= $block->type() ?>">
    <?= snippet('button-block', ['block' => $block]) ?>
  </div>
<?php endforeach ?>
