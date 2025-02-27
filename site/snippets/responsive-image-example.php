<?php
/**
 * Examples of how to use the responsive-image snippet
 * This file is for reference only - you can copy these examples into your templates
 */
?>

<!-- Basic usage -->
<?php snippet('responsive-image', ['image' => $page->image()]) ?>

<!-- With custom sizes attribute -->
<?php snippet('responsive-image', [
  'image' => $page->image(),
  'sizes' => '(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw'
]) ?>

<!-- With cropping to specific ratio -->
<?php snippet('responsive-image', [
  'image' => $page->image(),
  'ratio' => '16/9',
  'crop' => 'center'
]) ?>

<!-- With a specific image -->
<?php if($image = $page->cover()->toFile()): ?>
  <?php snippet('responsive-image', ['image' => $image]) ?>
<?php endif ?>

<!-- In a loop -->
<?php foreach($page->images() as $image): ?>
  <?php snippet('responsive-image', ['image' => $image]) ?>
<?php endforeach ?>
