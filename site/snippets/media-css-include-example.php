<?php
/**
 * Example of how to include the media CSS in your header
 * Add this to your site/snippets/header.php file
 */
?>

<!-- In your header.php file, add this line before the closing </head> tag -->
<?= css('site/snippets/media.css') ?>

<!-- Alternatively, you can import it into your main CSS file -->
<!-- In your main CSS file, add: @import url('/site/snippets/media.css'); -->

<!-- Or you can copy the contents directly into your main CSS file -->
