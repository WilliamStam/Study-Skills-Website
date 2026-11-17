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

## Contact form

The contact page posts to [Web3Forms](https://web3forms.com) with their free hCaptcha.

- **Deploy:** add the Web3Forms access key as a repo secret named `WEB3FORMS_ACCESS_KEY`
  (**Settings → Secrets and variables → Actions**). The deploy workflow passes it to the build as
  `VITE_WEB3FORMS_ACCESS_KEY`.
- **Local dev:** put `VITE_WEB3FORMS_ACCESS_KEY=<key>` in `src/.env.local` (gitignored).
- In the Web3Forms dashboard, enable **hCaptcha** for the form so submissions without a solved
  captcha are rejected server-side.

Note the access key ends up in the built JavaScript — that's how Web3Forms is designed (it only
lets the key send mail to its own inbox). The secret just keeps it out of the repo.
