# Study Skills Website

Vue 3 + TypeScript + Vite, with Bootstrap 6 (SCSS), Vue Router and Font Awesome.

## Development

```sh
npm install
npm run dev      # dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the built dist/
```

The Vite root is `src/` (`src/index.html` is the entry); static files live in `public/`.

## Deployment

- `.github/workflows/build.yml` builds every PR and non-`main` push.
- `.github/workflows/deploy.yml` builds `main` and publishes it to GitHub Pages.

One-time setup: in the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
The base path (`/<repo>/`) is picked up automatically from the Pages configuration.
