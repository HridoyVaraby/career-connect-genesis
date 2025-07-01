
# Deployment Guide for cPanel Hosting

This guide will help you deploy your React application to cPanel hosting.

## Prerequisites
- cPanel hosting account
- Node.js installed locally
- Access to your hosting's File Manager or FTP

## Step 1: Build the Application
Run the following command in your project directory:
```bash
npm run build
```

This will create a `dist` folder with all the production files.

## Step 2: Prepare Files for Upload
After building, you'll have a `dist` folder containing:
- `index.html`
- `assets/` folder with CSS and JS files
- Static assets (images, etc.)

## Step 3: Upload to cPanel
1. Log into your cPanel
2. Open File Manager
3. Navigate to the `public_html` directory (or your domain's root folder)
4. Upload ALL contents from the `dist` folder to `public_html`
   - Upload `index.html` to the root
   - Upload the `assets` folder
   - Upload any other files/folders from `dist`

## Step 4: Configure .htaccess
The `.htaccess` file in your project root should be uploaded to handle React Router properly.

## Step 5: Update Sitemap
1. Open `sitemap.xml`
2. Replace `https://yourdomain.com` with your actual domain
3. Upload the updated `sitemap.xml` to your `public_html` directory

## Step 6: Test Your Website
- Visit your domain to ensure the site loads
- Test navigation between pages
- Check that all routes work properly

## Troubleshooting
- If pages show 404 errors, ensure `.htaccess` is uploaded correctly
- If assets don't load, check that the `assets` folder is in the right location
- If you see build errors, run `npm run build` again locally

## File Structure After Upload
```
public_html/
├── index.html
├── .htaccess
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── [other static files]
```

## Notes
- Always backup your existing files before uploading
- Clear browser cache if changes don't appear immediately
- Some cPanel hosts may require 24-48 hours for DNS propagation
