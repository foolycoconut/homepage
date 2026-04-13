# Homepage

Personal homepage starter built with Astro, MDX, Tailwind CSS, and GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Customize

- Update the placeholder text in `src/pages/index.astro`
- Replace profile links in `src/pages/index.astro`
- Add or edit project entries in `src/content/projects`
- Add or edit notes in `src/content/writing`

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, set Pages to use **GitHub Actions** as the source.
3. Push to `main` and the workflow in `.github/workflows/deploy.yml` will build and deploy the site.

The Astro config automatically uses the correct `base` path for `username.github.io/repository-name` style project pages.
