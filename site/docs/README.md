# Media Optimization for Kirby CMS

This package provides a comprehensive solution for optimizing images and videos in your Kirby CMS website.

## Features

- **Automatic Image Compression**: Compresses images on upload to reduce file size
- **Responsive Images**: Generates multiple sizes of images in both WebP and JPEG formats
- **Responsive Videos**: Provides a standardized way to embed videos with proper responsive behavior
- **CSS Styling**: Includes basic CSS for responsive media elements

## Files Included

### Blueprints

- `site/blueprints/files/image.yml` - Blueprint for image files with compression settings
- `site/blueprints/files/video.yml` - Blueprint for video files with metadata fields
- `site/blueprints/files/default.yml` - Default blueprint for all other file types

### Snippets

- `site/snippets/responsive-image.php` - Snippet for responsive images with WebP and JPEG formats
- `site/snippets/responsive-video.php` - Snippet for responsive videos with metadata support
- `site/snippets/responsive-image-example.php` - Examples of how to use the responsive image snippet
- `site/snippets/responsive-video-example.php` - Examples of how to use the responsive video snippet
- `site/snippets/media-css-include-example.php` - Example of how to include the CSS file

### CSS

- `site/snippets/media.css` - CSS styles for responsive media elements

### Documentation

- `site/docs/image-compression.md` - Detailed documentation on how to use the system

## Quick Start

1. Upload images through the Kirby Panel - they will be automatically compressed
2. Use the responsive image snippet in your templates:
   ```php
   <?php snippet('responsive-image', ['image' => $page->image()]) ?>
   ```
3. Use the responsive video snippet for videos:
   ```php
   <?php snippet('responsive-video', ['video' => $page->video()->toFile()]) ?>
   ```
4. Include the CSS in your header:
   ```php
   <?= css('site/snippets/media.css') ?>
   ```

## Documentation

For detailed documentation, see [image-compression.md](image-compression.md).
