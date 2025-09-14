 production-ready **Next.js + Tailwind** portfolio.

* static export for **GitHub Pages**
* a **Docker** multi-stage build (serves the static site via Nginx)
* a **docker-compose** for quick local testing
* a **GitHub Actions** workflow that builds & deploys to Pages on push to `master`


### What’s included

* Next.js App Router (`/src/app`) with sections: Hero, Projects, Experience, Skills, **Beyond Code**, Contact.
* Content lives in `/src/data/*` so you can edit links & bullets without touching layout.
* Static export config in `next.config.mjs` (`output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`).
* Tailwind configured, dark mode toggle, accessible contrast.
* `Dockerfile` (multi-stage) builds and serves `/out` via Nginx.
* `.github/workflows/deploy.yml` deploys to GitHub Pages.

### Personalize (do this first)

* Open `src/data/site.config.ts` and set:

  * `githubUser: '<your-username>'`
  * `linkedin` and `email`
* Update `src/data/projects.ts` with your real repo links (DICOM Converter, InfinityView, PD app, etc.).
* Replace `public/resume.pdf` with real resume.
* Drop real photos into `public/images/` (W210, E39, homelab, etc.) or remove those cards.

### Run locally

```bash
npm i
npm run dev
# open http://localhost:3000
```

### Build static & preview the export

```bash
npm run build         # generates /out
npm run preview:static
# open http://localhost:4173
```

### Test with Docker (serves the static export)

```bash
docker build -t laith-site .
docker run -p 8080:80 laith-site
# open http://localhost:8080
```

or with Compose:

```bash
docker compose up --build
# open http://localhost:8080
```

### Deploy to GitHub Pages

1. Create a public repo (for a user site, name it `<your-username>.github.io`).
2. Push code to the `main` branch.
3. In **Settings → Pages**, set **Source = GitHub Actions**.
4. Push again (or run the workflow); it will build & publish `/out`.

> Hosting under a project path (e.g., `/my-portfolio`)



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
