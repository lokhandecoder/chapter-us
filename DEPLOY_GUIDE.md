# Publishing to GitHub Pages Guide

Your app is fully configured for deployment to **GitHub Pages**!

---

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

A workflow file has been created at `.github/workflows/deploy.yml`.

1. Push this project to your GitHub repository (on `main` or `master` branch):
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Dr. Trunali"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to your repository **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. That's it! GitHub Actions will automatically build and publish your website to:
   `https://<your-username>.github.io/<your-repo-name>/`

---

### Option 2: Deploying Manually Using `gh-pages`

You can also deploy directly from your local terminal with one command:

```bash
npm run deploy
```

This will automatically:
1. Build the production bundle into `/dist` (`npm run build`).
2. Push the built files to the `gh-pages` branch on your GitHub repository.
3. Make it live on GitHub Pages.

