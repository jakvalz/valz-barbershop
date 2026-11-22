# VALZ — Men's Barbershop

Premium men's-only barbershop landing page for VALZ (Brooklyn).

## Stack

Vite, React, TypeScript, Tailwind CSS v4, Framer Motion

## Develop

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

Live URL (after deploy): https://jakvalz.github.io/valz-barbershop/

Vite is configured with `base: '/valz-barbershop/'`. Pushes to `main` run `.github/workflows/deploy-pages.yml`, which builds the site and deploys the `dist` folder.

### One-time repo setting (required)

1. Open **Settings → Pages** on https://github.com/jakvalz/valz-barbershop
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch”)
3. Merge this Pages fix to `main` (or run the workflow manually from the Actions tab)
4. Wait for the **Deploy VALZ to GitHub Pages** workflow to finish green
