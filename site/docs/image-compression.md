# Media Optimization in Kirby

This documentation explains how to use the media optimization features implemented in this project, including image compression, responsive images, and video handling.

## Overview

The system consists of several components:

1. **Automatic Image Compression on Upload**: Limits file size and compresses images when they're uploaded
2. **Responsive Image Generation**: Creates multiple sizes of images in both WebP and JPEG formats for optimal delivery
3. **Video Handling**: Provides responsive video embedding with poster images and playback controls

## Image Compression on Upload

The file blueprint at `site/blueprints/files/image.yml` handles automatic compression of images when they're uploaded to the Kirby Panel.

### Configuration

```yaml
title: Image
accept:
  mime: image/jpeg, image/png, image/gif, image/webp
  maxsize: 8000000 # 8MB limit
options:
  create:
    width: 2000     # max width
    quality: 80     # compression level (0-100)
fields:
  alt:
    label: Alt Text
    type: text
  caption:
    label: Caption
    type: text
```

### How It Works

- **File Size Limit**: Rejects files larger than 8MB
- **Initial Resizing**: Automatically resizes images larger than 2000px wide while maintaining aspect ratio
- **Quality Compression**: Applies 80% quality compression to reduce file size

You can adjust these settings by modifying the `image.yml` file.

## Responsive Images

The `responsive-image.php` snippet generates responsive images in both WebP and JPEG formats at multiple sizes.

### How It Works

1. Generates multiple sizes of each image (320px, 640px, 960px, 1280px, 1600px, 2000px)
2. Creates both WebP and JPEG versions of each size
3. Uses the HTML `<picture>` element with `srcset` to deliver the appropriate size and format
4. Browsers that support WebP will use that format, others will fall back to JPEG
5. The browser selects the appropriate image size based on the viewport width

### Usage in Templates

Basic usage:

```php
<?php snippet('responsive-image', ['image' => $page->image()]) ?>
```

With custom sizes attribute:

```php
<?php snippet('responsive-image', [
  'image' => $page->image(),
  'sizes' => '(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw'
]) ?>
```

With cropping to specific ratio:

```php
<?php snippet('responsive-image', [
  'image' => $page->image(),
  'ratio' => '16/9',
  'crop' => 'center'
]) ?>
```

With a specific image:

```php
<?php if($image = $page->cover()->toFile()): ?>
  <?php snippet('responsive-image', ['image' => $image]) ?>
<?php endif ?>
```

In a loop:

```php
<?php foreach($page->images() as $image): ?>
  <?php snippet('responsive-image', ['image' => $image]) ?>
<?php endforeach ?>
```

### Parameters

The snippet accepts the following parameters:

- `image` (required): The Kirby file object
- `sizes` (optional): The sizes attribute for the srcset, defaults to `(min-width: 1024px) 50vw, 100vw`
- `ratio` (optional): Aspect ratio for cropping, e.g. `16/9`
- `crop` (optional): Crop position, e.g. `center`, `top`, `bottom`, etc.

## Customization

### Modifying Image Sizes

To change the generated image sizes, edit the `$widths` array in `site/snippets/responsive-image.php`:

```php
// Define responsive widths
$widths = [320, 640, 960, 1280, 1600, 2000];
```

### Changing Compression Quality

To adjust the compression quality, modify the `$quality` variable in `site/snippets/responsive-image.php`:

```php
// Define quality
$quality = 80;
```

### Adding Support for Additional Image Formats

The snippet currently generates WebP and JPEG formats. To add additional formats (like AVIF), you would need to modify the snippet to generate those formats and add additional `<source>` elements to the `<picture>` element.

### CSS Styling

A basic CSS file is included at `site/snippets/media.css` that provides styling for responsive images and videos. You can include this in your main CSS file or link it in your header:

```php
<?= css('site/snippets/media.css') ?>
```

The CSS file includes:

- Basic responsive styling for images and videos
- Caption styling
- Aspect ratio containers for videos
- Styles for background videos

You can customize these styles to match your site's design.

## Video Handling

The system includes a file blueprint for videos and a responsive video snippet.

### Video Blueprint

The file blueprint at `site/blueprints/files/video.yml` handles video files uploaded to the Kirby Panel.

```yaml
title: Video
accept:
  mime: video/mp4, video/webm, video/ogg
  maxsize: 100000000 # 100MB limit
fields:
  alt:
    label: Alt Text
    type: text
    help: Description for screen readers
  caption:
    label: Caption
    type: text
    help: Short description displayed below the video
  poster:
    label: Poster Image
    type: files
    multiple: false
    help: Image to display before the video plays
    query: site.index.images
  autoplay:
    label: Autoplay
    type: toggle
    text:
      - "No"
      - "Yes"
    help: Automatically start playing the video when the page loads
  loop:
    label: Loop
    type: toggle
    text:
      - "No"
      - "Yes"
    help: Continuously loop the video
  muted:
    label: Muted
    type: toggle
    text:
      - "No"
      - "Yes"
    help: Mute the video by default
```

### Responsive Video Snippet

The `responsive-video.php` snippet provides a standardized way to embed videos with proper responsive behavior.

#### How It Works

1. Uses the HTML5 `<video>` element with appropriate attributes
2. Automatically applies poster images, autoplay, loop, and muted settings from the file's metadata
3. Includes fallback text for browsers that don't support video
4. Displays captions when available

#### Usage in Templates

Basic usage:

```php
<?php snippet('responsive-video', ['video' => $page->video()->toFile()]) ?>
```

With custom parameters:

```php
<?php snippet('responsive-video', [
  'video' => $page->video()->toFile(),
  'autoplay' => true,
  'loop' => true,
  'muted' => true,
  'controls' => false,
  'class' => 'background-video'
]) ?>
```

With a specific poster image:

```php
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
```

#### Parameters

The snippet accepts the following parameters:

- `video` (required): The Kirby file object for the video
- `poster`: Image file to use as poster (defaults to video's poster field if set)
- `autoplay`: Boolean to autoplay video (defaults to video's autoplay field if set)
- `loop`: Boolean to loop video (defaults to video's loop field if set)
- `muted`: Boolean to mute video (defaults to video's muted field if set)
- `controls`: Boolean to show controls (defaults to true)
- `class`: Additional CSS classes

## Benefits

- **Reduced Server Storage**: Initial compression reduces the size of uploaded files
- **Faster Page Loads**: Smaller files and responsive loading improve page speed
- **Better SEO**: Page speed is a ranking factor for search engines
- **Lower Bandwidth Usage**: Smaller files reduce bandwidth costs and improve mobile experience
- **Future-Proof**: Modern formats like WebP provide better compression with fallbacks for older browsers
- **Consistent Media Handling**: Standardized approach to both images and videos
- **Enhanced User Experience**: Proper responsive behavior for all media types
