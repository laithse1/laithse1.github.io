'use client'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Timeline from '../components/Timeline'
import { PROJECTS } from '../data/projects'
import { EXPERIENCE } from '../data/experience'
import { SKILLS } from '../data/skills'
import { SITE } from '../data/site.config'
import { GALLERY } from '../data/gallery'
import QuadAutoGallery from '../components/QuadAutoGallery'

// Distribute the flat GALLERY into 4 columns (round-robin), copying each item
type Img = { src: string; alt?: string }
const COLS: Img[][] = [[], [], [], []]
;(GALLERY as ReadonlyArray<Img>).forEach((g, i) => {
  COLS[i % 4].push({ ...g }) // spread removes readonly so TS is happy
})

export default function Page() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <Hero />

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <a
            href={`https://github.com/${SITE.githubUser}?tab=repositories`}
            className="text-sm hover:text-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            More projects →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} p={p as any} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <Timeline roles={EXPERIENCE as any} />
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(SKILLS).map(([k, arr]) => (
            <div
              key={k}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5"
            >
              <div className="font-semibold mb-2">{k}</div>
              <div className="flex flex-wrap gap-2">
                {arr.map((x, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-full text-xs border border-slate-300 dark:border-slate-700"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEYOND CODE */}
      <section id="beyond" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Life Beyond Code</h2>
          {/* <span className="text-sm text-slate-500">German cars • Maker/Handyman • Geek life</span> */}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900">
            <div className="font-semibold">German Car Enthusiast</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Outside of work, I enjoy wrenching on Mercedes and BMWs, tackling everything from diagnostics and
              preventative maintenance to repairs and OEM-plus upgrades.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full border">Mercedes-Benz</span>
              <span className="px-2 py-1 rounded-full border">BMW</span>
              <span className="px-2 py-1 rounded-full border">Diagnostics</span>
              <span className="px-2 py-1 rounded-full border">Maintenance & Repair</span>
              <span className="px-2 py-1 rounded-full border">OEM+ Mods</span>
            </div>
          </div>

          {/* Keep other cards commented or add them back here if you want */}
        </div>
      </section>

      {/* Auto-cycling 4-tile gallery */}
      <QuadAutoGallery columns={COLS} title="Garage & Builds" intervalMs={5000} />

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-8 bg-slate-50 dark:bg-slate-900/50">
          <h2 className="text-2xl font-bold">Let’s build something great</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            I’m excited to connect about opportunities in software engineering,
            full-stack development, or platform engineering,
            where I can apply my expertise to build scalable,
            impactful and user-centered solutions.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {/* Email */}
            <a
              href={`mailto:${SITE.email}`}
              className="px-5 py-2.5 rounded-xl bg-brand text-white hover:bg-brand/90"
            >
              {SITE.email}
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700"
            >
              Download Resume
            </a>

            {/* GitHub */}
            <a
              href={`https://github.com/${SITE.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-brand/60"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M12 .5A11.5 11.5 0 0 0 .5 12.39c0 5.27 3.41 9.73 8.15 11.31.6.11.82-.26.82-.58 0-.29-.01-1.07-.02-2.1-3.32.74-4.02-1.63-4.02-1.63-.55-1.43-1.35-1.81-1.35-1.81-1.1-.77.08-.76.08-.76 1.22.09 1.87 1.28 1.87 1.28 1.08 1.89 2.82 1.35 3.51 1.03.11-.8.42-1.35.76-1.66-2.65-.31-5.44-1.37-5.44-6.09 0-1.35.47-2.45 1.25-3.32-.13-.31-.54-1.56.12-3.26 0 0 1.01-.33 3.31 1.26a11.5 11.5 0 0 1 6.03 0c2.3-1.59 3.31-1.26 3.31-1.26.66 1.7.25 2.95.12 3.26.78.87 1.25 1.97 1.25 3.32 0 4.73-2.8 5.77-5.47 6.08.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.82.58A11.5 11.5 0 0 0 23.5 12.39 11.5 11.5 0 0 0 12 .5Z"
                />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-brand/60"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v11h3V10Zm5 0H7v11h3v-5.8c0-1.54.58-2.4 1.83-2.4 1.2 0 1.77.85 1.77 2.4V21h3v-6.43c0-3.08-1.64-4.57-3.83-4.57-1.77 0-2.56.98-2.97 1.67h-.05V10Z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Laith Alkhalil-AlHamed. Built with React/Next.js & Tailwind. Hosted on GitHub Pages.
      </footer>
    </main>
  )
}
