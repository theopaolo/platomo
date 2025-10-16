FROM php:8.3-fpm-alpine

# Platomo - Lightweight Kirby CMS deployment
# Alpine Linux + Nginx + PHP-FPM (~200MB final image)
# Perfect for Coolify auto-deployment with git push

# Install system dependencies and build tools
RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    libzip-dev \
    oniguruma-dev \
    zip \
    unzip \
    nodejs \
    npm \
    nginx \
    supervisor

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . /var/www/html

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Install Node dependencies and build assets
RUN npm install && \
    npm run build && \
    rm -rf node_modules

# Use production .htaccess
RUN if [ -f .htaccess.production ]; then cp .htaccess.production .htaccess; fi

# Configure nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/http.d/default.conf

# Configure PHP-FPM
RUN echo "clear_env = no" >> /usr/local/etc/php-fpm.d/www.conf

# Configure supervisor
COPY docker/supervisord.conf /etc/supervisord.conf

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Create required directories
RUN mkdir -p /run/nginx /var/log/supervisor

# Expose port
EXPOSE 80

# Start supervisor (manages nginx + php-fpm)
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
