<?php
require_once __DIR__ . '/vendor/autoload.php';

$environment = getenv('APP_ENV') ?: 'development'; // Default to 'development' if APP_ENV is not set
$envFilename = '.env.' . $environment;

if (file_exists(__DIR__ . '/' . $envFilename)) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__, $envFilename);
    $dotenv->load();
    echo "Environment variables loaded from {$envFilename}\n";
} else {
    echo "Environment file {$envFilename} does not exist.\n";
}