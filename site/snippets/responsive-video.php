<?php
/**
 * Responsive video snippet
 * Usage: snippet('responsive-video', ['video' => $video])
 * Optional parameters:
 * - poster: Image file to use as poster (defaults to video's poster field if set)
 * - autoplay: Boolean to autoplay video (defaults to video's autoplay field if set)
 * - loop: Boolean to loop video (defaults to video's loop field if set)
 * - muted: Boolean to mute video (defaults to video's muted field if set)
 * - controls: Boolean to show controls (defaults to true)
 * - class: Additional CSS classes
 */

if (!isset($video) || !$video) return;

// Get video metadata from file or parameters
$poster = $poster ?? $video->poster()->toFile() ?? null;
$autoplay = $autoplay ?? $video->autoplay()->toBool() ?? false;
$loop = $loop ?? $video->loop()->toBool() ?? false;
$muted = $muted ?? $video->muted()->toBool() ?? false;
$controls = $controls ?? true;
$class = $class ?? '';

// Get alt text and caption
$alt = $video->alt()->or($video->caption())->or($video->filename())->html();
$caption = $video->caption()->html();
?>

<figure class="responsive-video <?= $class ?>">
  <video
    <?= $poster ? 'poster="' . $poster->url() . '"' : '' ?>
    <?= $autoplay ? 'autoplay' : '' ?>
    <?= $loop ? 'loop' : '' ?>
    <?= $muted ? 'muted' : '' ?>
    <?= $controls ? 'controls' : '' ?>
    playsinline
    preload="metadata"
    width="100%"
    height="auto"
  >
    <source src="<?= $video->url() ?>" type="<?= $video->mime() ?>">
    Your browser does not support the video tag.
  </video>

  <?php if ($caption): ?>
  <figcaption><?= $caption ?></figcaption>
  <?php endif ?>
</figure>
