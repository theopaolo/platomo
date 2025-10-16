# Docker Configuration

This directory contains configuration files for the Alpine Linux + Nginx deployment.

## Files

### `nginx.conf`
Main Nginx configuration with:
- Gzip compression enabled
- Optimized worker processes
- MIME types configured
- Reasonable defaults for Kirby CMS

### `default.conf`
Nginx server block (virtual host) for Kirby:
- Pretty URLs without `.php` extensions
- Static asset caching (CSS, JS, images)
- PHP-FPM FastCGI configuration
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Blocks direct access to `content/`, `site/`, `kirby/` directories
- Serves `assets/` and `media/` folders directly

### `supervisord.conf`
Process manager that runs both:
- **Nginx** - Web server (port 80)
- **PHP-FPM** - PHP processor (internal port 9000)

Both processes restart automatically if they crash.

## Architecture

```
Request Flow:
─────────────

Browser → Nginx (port 80)
            │
            ├─→ Static files (.css, .js, images) → Direct response
            │
            └─→ Dynamic requests (.php or Kirby URLs)
                    │
                    └─→ PHP-FPM (FastCGI)
                            │
                            └─→ Kirby CMS → Response
```

## Performance Features

1. **Static File Caching**
   - CSS/JS/Images cached for 1 year
   - No PHP processing for assets
   - Gzip compression for text files

2. **PHP-FPM**
   - Better than mod_php (Apache module)
   - Process pool management
   - Lower memory usage

3. **Alpine Linux**
   - Minimal base (~5MB)
   - Security-focused
   - Fast package manager (apk)

## Customization

### Increase Upload Limit

Edit `default.conf`:
```nginx
client_max_body_size 128M;  # Default is 64M
```

### Enable More Caching

Edit `default.conf` to add cache headers for more file types.

### PHP Configuration

Create `docker/php.ini` and add to Dockerfile:
```dockerfile
COPY docker/php.ini /usr/local/etc/php/conf.d/custom.ini
```

### Debugging

To enable Nginx debug logs, edit `nginx.conf`:
```nginx
error_log /var/log/nginx/error.log debug;
```
