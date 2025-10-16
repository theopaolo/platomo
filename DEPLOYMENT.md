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

```bash
# Build
docker build -t platomo .

# Run
docker run -p 8080:80 platomo

# Visit
open http://localhost:8080
```

Or with docker-compose:

```bash
docker-compose up -d
open http://localhost
```

### Troubleshooting

**CSS/JS not loading:**
- Check that assets are being built correctly
- Verify `.htaccess` has correct RewriteBase
- Check Apache error logs in Coolify

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

# Access container shell
docker exec -it <container-id> bash

# Rebuild without cache
docker build --no-cache -t platomo .
```

## Shared Hosting Issues

If you're still using PlanetHoster shared hosting:

The `.htaccess` file is configured for `/platomo` subdirectory. The main issues were:
1. MIME type mismatch due to aggressive security headers
2. CSS files being routed through index.php instead of served directly

**Solutions applied:**
- Explicit MIME type declarations for `.css`, `.js`, `.svg`
- Modified Content-Type security header to exclude static assets
- Added explicit rule to allow `/assets/` directory access

**Recommendation**: Migrate to Coolify/VPS for better control and performance.
