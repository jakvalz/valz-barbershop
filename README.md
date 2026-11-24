# VALZ — Men's Barbershop

Premium men's-only barbershop landing page for VALZ (Chandler, AZ).

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

Live URL: https://jakvalz.github.io/valz-barbershop/

Vite uses `base: '/valz-barbershop/'`. Pushes to `main` run `.github/workflows/deploy-pages.yml`, which builds the site and publishes `dist` to the **`gh-pages`** branch.

### One-time repo setting (required)

1. Open **Settings → Pages** on https://github.com/jakvalz/valz-barbershop
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** / folder: **`/ (root)`** — then Save  
   (Do **not** point Pages at `main` — that serves the Vite source and breaks the site.)
4. Merge the deploy workflow to `main` (or wait for the next push) so `gh-pages` is created/updated
5. Wait for **Deploy VALZ to GitHub Pages** to finish green, then hard-refresh the live URL
