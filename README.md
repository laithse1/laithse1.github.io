# Laith Alkhalil — Portfolio (Next.js + Tailwind)

Modern, static-exportable Next.js site ready for **GitHub Pages** + **Docker**.

## Quick start

```bash
npm i
npm run dev
# open http://localhost:3000
```

## Build static & preview

```bash
npm run build
npm run preview:static
# open http://localhost:4173
```

## Docker (local)

```bash
docker build -t laith-site .
docker run -p 8080:80 laith-site
# open http://localhost:8080
```

Or:

```bash
docker compose up --build
# open http://localhost:8080
```

## Deploy to GitHub Pages

1. Create a public repo (ideally `<your-username>.github.io` for user site).
2. Push this code to the `main` branch.
3. In repo **Settings → Pages**, set **Source = GitHub Actions**.
4. Push to `main` again; workflow builds and deploys `/out` to Pages.

> For a project site (not user root), you may need a `basePath`.> See `next.config.mjs` if hosting under `/<repo>` instead of root.

## Personalization

- Replace links/usernames in: `src/data/site.config.ts`, `src/data/projects.ts`.
- Swap placeholder images in `public/images/*`.
- Replace `public/resume.pdf` with your real resume.

## Tech

- Next.js App Router, Tailwind CSS
- Static export (`next export`) → great for GitHub Pages
- Docker multi-stage build → Nginx serves the static export
- GitHub Actions → build & deploy on push to `main`
