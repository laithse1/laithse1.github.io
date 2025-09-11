Nice—here’s a complete, production-ready **Next.js + Tailwind** portfolio that matches the style we discussed, includes your “Beyond Code” section, and supports:

* static export for **GitHub Pages**
* a **Docker** multi-stage build (serves the static site via Nginx)
* a **docker-compose** for quick local testing
* a **GitHub Actions** workflow that builds & deploys to Pages on push to `main`

**Download the project:** [laith-portfolio-next.zip](sandbox:/mnt/data/laith-portfolio-next.zip)

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
* Replace `public/resume.pdf` with your real resume.
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

> Hosting under a project path (e.g., `/my-portfolio`)? Tell me and I’ll switch `next.config.mjs` to include a `basePath` for that repo.

Want me to bake in your exact GitHub username, LinkedIn, and the real project URLs now? Share those handles and I’ll regenerate the project with everything wired up.
