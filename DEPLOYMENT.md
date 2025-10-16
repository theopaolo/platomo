# Deployment Guide - Platomo

## Coolify Deployment on Netcup VPS

### Prerequisites
- Coolify installed on your Netcup VPS
- Git repository (GitHub/GitLab/Gitea)
- Domain or subdomain configured

### Setup Steps

#### 1. Push to Git Repository

```bash
git add .
git commit -m "Add Coolify deployment configuration"
git push origin main
```

#### 2. Create New Project in Coolify

1. Log in to your Coolify dashboard
2. Click **"+ New"** → **"Application"**
3. Select your Git source (GitHub, GitLab, etc.)
4. Select the repository: `platomo`
5. Choose branch: `main`

#### 3. Configure Build Settings

- **Build Pack**: Dockerfile
- **Port**: 80
- **Base Directory**: / (root)
- **Dockerfile Location**: ./Dockerfile

**Stack:**
- Alpine Linux (~150MB base)
- Nginx web server
- PHP 8.3 FPM
- Supervisor (process manager)

**Benefits:**
- ⚡ Fast builds (~200MB final image)
- 🚀 Low memory footprint
- 🔒 Minimal attack surface
- 💪 Production-ready

#### 4. Environment Variables (if needed)

Add any environment variables in the Coolify UI:
- `PHP_ENV=production`
- Add your `.env` variables if using phpdotenv

#### 5. Deploy

Click **"Deploy"** - Coolify will:
1. Clone your repository
2. Build the Docker image
3. Run `composer install`
4. Run `npm install && npm run build`
5. Start the Apache server

#### 6. Configure Domain

1. In Coolify, go to your application settings
2. Add your domain/subdomain
3. Enable SSL (Let's Encrypt)
4. Coolify will automatically configure HTTPS

### Auto-Deploy on Git Push

Coolify automatically sets up webhooks for:
- **GitHub**: Automatic webhook on push to main
- **GitLab**: Automatic webhook on push to main
- **Gitea**: Automatic webhook on push to main

**Every time you push to `main`, Coolify will automatically rebuild and redeploy!**

### Manual Deploy

You can trigger a manual deploy from:
- Coolify dashboard → Your application → **"Redeploy"** button
- Or via Coolify CLI (if installed)

### Local Development vs Production

- **Local (.htaccess)**: Uses `RewriteBase /platomo` for subdirectory
- **Production (.htaccess.production)**: Uses `RewriteBase /` for root installation
- The Dockerfile automatically uses `.htaccess.production` during build

### Testing Locally with Docker

**Build and run:**
```bash
docker build -t platomo .
docker run -p 8080:80 platomo
open http://localhost:8080
```

**With docker-compose (recommended):**
```bash
docker-compose up -d
open http://localhost
```

**Check image size:**
```bash
docker images platomo
# Expected: ~200-300MB (Alpine + Nginx + PHP-FPM)
```

### Troubleshooting

**CSS/JS not loading:**
- Check that assets are being built correctly: `npm run build`
- Check Nginx configuration in `docker/default.conf`
- View logs in Coolify dashboard or: `docker logs <container-id>`

**Permission errors:**
- Ensure `content/` and `media/` directories are writable
- Check file ownership (should be www-data)

**Build fails:**
- Check Coolify build logs
- Verify all dependencies are in package.json and composer.json
- Test Docker build locally first

### Useful Commands

```bash
# View logs
docker logs <container-id>

# Access container shell (Alpine uses sh, not bash)
docker exec -it <container-id> sh

# View Nginx logs
docker exec -it <container-id> tail -f /var/log/nginx/access.log
docker exec -it <container-id> tail -f /var/log/nginx/error.log

# Rebuild without cache
docker build --no-cache -t platomo .

# Check running processes inside container
docker exec -it <container-id> ps aux
```

## Architecture

**Lightweight Stack:**
- **OS**: Alpine Linux 3.x (~5MB base)
- **Web Server**: Nginx (fast, efficient)
- **PHP**: 8.3-FPM (process manager for better performance)
- **Process Manager**: Supervisor (keeps Nginx + PHP-FPM running)
- **Final Image**: ~200-300MB (vs 500-600MB for traditional LAMP stack)

**Why Alpine + Nginx?**
- 50-70% smaller image size
- Faster deployments and updates
- Lower memory usage
- Better for microservices architecture
- Perfect match for Kirby's lean philosophy

---

## Shared Hosting Issues (Legacy)

If you're still using PlanetHoster shared hosting with the `.htaccess` file:

The main issues were:
1. MIME type mismatch due to aggressive security headers
2. CSS files being routed through index.php instead of served directly

**Note**: The Docker/Coolify setup doesn't use `.htaccess` - it uses Nginx configuration which is much more efficient and reliable.
