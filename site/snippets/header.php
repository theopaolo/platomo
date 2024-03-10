<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?= css('assets/css/plyr.css') ?>
  <?= css('assets/css/styles.css') ?>

  <title>
    <?= $page->title() ?> | <?= $site->title() ?>
  </title>
</head>
<body  class="page-base <?php if($page->isHomePage()): ?>swup-page-home<?php endif ?>"  >
<?php snippet('nav') ?>
