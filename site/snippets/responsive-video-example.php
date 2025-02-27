<?php
/**
 * Examples of how to use the responsive-video snippet
 * This file is for reference only - you can copy these examples into your templates
 */
?>

<!-- Basic usage -->
<?php snippet('responsive-video', ['video' => $page->video()->toFile()]) ?>

<!-- With custom parameters -->
<?php snippet('responsive-video', [
  'video' => $page->video()->toFile(),
  'autoplay' => true,
  'loop' => true,
  'muted' => true,
  'controls' => false,
  'class' => 'background-video'
]) ?>

<!-- With a specific poster image -->
<?php if($video = $page->video()->toFile()): ?>
  <?php if($poster = $page->cover()->toFile()): ?>
    <?php snippet('responsive-video', [
      'video' => $video,
      'poster' => $poster
    ]) ?>
  <?php else: ?>
    <?php snippet('responsive-video', ['video' => $video]) ?>
  <?php endif ?>
<?php endif ?>

<!-- In a loop -->
<?php foreach($page->videos()->toFiles() as $video): ?>
  <?php snippet('responsive-video', ['video' => $video]) ?>
<?php endforeach ?>
