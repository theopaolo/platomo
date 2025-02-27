<?php
/**
 * Responsive image snippet
 * Usage: snippet('responsive-image', ['image' => $image])
 * Optional parameters:
 * - sizes: e.g. "(min-width: 1024px) 50vw, 100vw"
 * - ratio: aspect ratio for cropping, e.g. "16/9"
 * - crop: crop position, e.g. "center"
 */

if (!isset($image) || !$image) return;

// Default sizes attribute if not provided
$sizes = $sizes ?? '(min-width: 1024px) 50vw, 100vw';

// Define responsive widths
$widths = [320, 640, 960, 1280, 1600, 2000];

// Define quality
$quality = 80;

// Determine if we're cropping or resizing
$crop = isset($ratio) ? true : false;
$cropPosition = $crop ? ($crop === true ? 'center' : $crop) : null;

// Generate srcsets for both formats
$webpSrcset = [];
$jpegSrcset = [];

foreach ($widths as $width) {
    // Skip sizes larger than the original
    if ($width > $image->width()) continue;

    // Generate thumbnails
    if ($crop && isset($ratio)) {
        // Calculate height based on ratio
        $ratioParts = explode('/', $ratio);
        $height = $width * (intval($ratioParts[1]) / intval($ratioParts[0]));

        $webpThumb = $image->thumb(['width' => $width, 'height' => $height, 'crop' => $cropPosition, 'format' => 'webp', 'quality' => $quality]);
        $jpegThumb = $image->thumb(['width' => $width, 'height' => $height, 'crop' => $cropPosition, 'format' => 'jpg', 'quality' => $quality]);
    } else {
        $webpThumb = $image->thumb(['width' => $width, 'format' => 'webp', 'quality' => $quality]);
        $jpegThumb = $image->thumb(['width' => $width, 'format' => 'jpg', 'quality' => $quality]);
    }

    $webpSrcset[] = $webpThumb->url() . ' ' . $width . 'w';
    $jpegSrcset[] = $jpegThumb->url() . ' ' . $width . 'w';
}

// Get alt text
$alt = $image->alt()->or($image->caption())->or($image->filename())->html();
?>

<picture>
  <!-- WebP sources -->
  <source
    type="image/webp"
    srcset="<?= implode(', ', $webpSrcset) ?>"
    sizes="<?= $sizes ?>"
  >
  <!-- JPEG fallback sources -->
  <source
    type="image/jpeg"
    srcset="<?= implode(', ', $jpegSrcset) ?>"
    sizes="<?= $sizes ?>"
  >
  <!-- Fallback image -->
  <img
    src="<?= $image->thumb(['width' => 640, 'format' => 'jpg', 'quality' => $quality])->url() ?>"
    alt="<?= $alt ?>"
    loading="lazy"
    width="<?= $image->width() ?>"
    height="<?= $image->height() ?>"
  >
</picture>
