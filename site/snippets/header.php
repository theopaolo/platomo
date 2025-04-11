<!DOCTYPE html>
<html lang="fr" class="">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/svg+xml" href="<?= url('assets/images/logo.svg') ?>">
  <?= css('assets/css/plyr.css') ?>
  <?= css('assets/css/styles.css') ?>

  <title>
    <?= $page->title() ?> | <?= $site->title() ?>
  </title>
</head>
<body class="page-base <?php if($page->isHomePage()): ?>swup-page-home<?php endif ?>">
<?php snippet('nav') ?>