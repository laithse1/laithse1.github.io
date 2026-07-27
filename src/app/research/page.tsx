import type { Metadata } from 'next'
import Header from '../../components/Header'
import { RESEARCH_IN_PROGRESS, RESEARCH_PROJECT, RESEARCH_PUBLICATION } from '../../data/research'
import { SITE } from '../../data/site.config'

export const metadata: Metadata = {
  title: 'Research | Laith Alkhalil-AlHamed',
  description:
    'Research projects, publications, and areas of interest across computer vision, machine learning, software engineering, and data-intensive systems.'
}

const researchInterests = [
  {
    title: 'Machine learning & vision',
    body: 'Representation learning, biometrics, computer vision, and evaluation of models on difficult real-world data.',
    tags: ['Computer Vision', 'Representation Learning', 'Biometrics']
  },
  {
    title: 'Research systems',
    body: 'Reproducible experimentation, dataset engineering, benchmarking infrastructure, and tools that make research easier to extend.',
    tags: ['Reproducibility', 'Benchmarking', 'Dataset Engineering']
  },
  {
    title: 'Software & AI platforms',
    body: 'Software engineering, data-intensive platforms, applied AI, and dependable systems that connect research to usable technology.',
    tags: ['Software Engineering', 'AI Systems', 'Data Platforms']
  }
] as const

const researchPrinciples = [
  'Make experiments reproducible',
  'Compare methods on consistent foundations',
  'Treat datasets and evaluation as first-class engineering work',
  'Build tooling that supports follow-on research'
] as const

export default function ResearchPage() {
  return (
    <main>
      <Header />

      <section className="relative isolate overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.3),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_30%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 md:pb-16 md:pt-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.26em] text-brand">Research portfolio</div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Research, built to grow.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              A home for current projects, working papers, and future research directions across computer science.
              The portfolio is currently anchored by kinship verification and reproducible machine-learning systems.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand/90">
                Current project
              </a>
              <a href="#publications" className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:border-brand/60 dark:border-slate-700">
                Publications
              </a>
              <a href={`mailto:${SITE.email}`} className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:border-brand/60 dark:border-slate-700">
                Discuss research
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Research page sections" className="sticky top-[57px] z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-3 text-sm font-medium text-slate-500">
          <a href="#overview" className="whitespace-nowrap hover:text-brand">Overview</a>
          <a href="#projects" className="whitespace-nowrap hover:text-brand">Projects</a>
          <a href="#publications" className="whitespace-nowrap hover:text-brand">Publications</a>
          <a href="#interests" className="whitespace-nowrap hover:text-brand">Research interests</a>
        </div>
      </nav>

      <section id="overview" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 dark:border-slate-800/80 dark:bg-slate-900/65 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Research approach</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Infrastructure before scale</h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 dark:text-slate-300">
              I am interested in research that is technically rigorous and practical to build on. That means treating
              the dataset pipeline, experiment configuration, evaluation, and reporting as part of the research—not as
              disposable support code.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {researchPrinciples.map((principle) => (
                <div key={principle} className="rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 text-sm leading-6 text-slate-700 dark:border-slate-800/70 dark:bg-slate-950/55 dark:text-slate-200">
                  {principle}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-6 text-white dark:border-slate-800/80 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">At a glance</div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {RESEARCH_PROJECT.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                  <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-300">
              Current work focuses on kinship verification from face imagery, while the broader portfolio remains open
              to research collaborations across software engineering, systems, and applied AI.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-8 md:py-12">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">01 · Projects</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Active research</h2>
          </div>
          <span className="text-sm text-slate-500">Two active directions · room for more</span>
        </div>

        <article className="rounded-[2rem] border border-brand/25 bg-white/90 p-6 shadow-[0_20px_70px_-45px_rgba(37,99,235,0.7)] dark:bg-slate-900/70 md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-emerald-300/50 bg-emerald-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">Active · 2026</div>
              <h3 className="mt-5 text-3xl font-bold tracking-tight">{RESEARCH_PROJECT.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{RESEARCH_PROJECT.subtitle}</p>
              <p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-300">{RESEARCH_PROJECT.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {RESEARCH_PROJECT.focusAreas.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-300/70 bg-slate-50/70 px-3 py-1 text-xs font-medium dark:border-slate-700/80 dark:bg-slate-950/55">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3 lg:max-w-[190px] lg:flex-col">
              <a href={RESEARCH_PROJECT.repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand/90">View repository</a>
              <a href="#publications" className="rounded-xl border border-slate-300 px-5 py-2.5 text-center text-sm font-semibold hover:border-brand/60 dark:border-slate-700">Related paper</a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-200/70 pt-8 dark:border-slate-800/70 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Research question</div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{RESEARCH_PROJECT.problem}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">What it contributes</div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {RESEARCH_PROJECT.contributions.slice(0, 3).map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </article>

        <article className="mt-6 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 dark:border-slate-800/80 dark:bg-slate-900/65 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-sky-300/50 bg-sky-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">Research in progress</div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">{RESEARCH_IN_PROGRESS.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{RESEARCH_IN_PROGRESS.subtitle}</p>
              <p className="mt-4 text-sm leading-8 text-slate-600 dark:text-slate-300">{RESEARCH_IN_PROGRESS.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {RESEARCH_IN_PROGRESS.focusAreas.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-300/70 bg-slate-50/70 px-3 py-1 text-xs font-medium dark:border-slate-700/80 dark:bg-slate-950/55">{tag}</span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {RESEARCH_IN_PROGRESS.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-800/70 dark:bg-slate-950/55">
                    <div className="text-xl font-bold tracking-tight">{metric.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <a href={RESEARCH_IN_PROGRESS.repoUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-xl border border-slate-300 px-5 py-2.5 text-center text-sm font-semibold hover:border-brand/60 dark:border-slate-700">View repository</a>
          </div>
          <div className="mt-7 grid gap-5 border-t border-slate-200/70 pt-7 dark:border-slate-800/70 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Research question</div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{RESEARCH_IN_PROGRESS.researchQuestion}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Current milestone</div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{RESEARCH_IN_PROGRESS.milestone}</p>
            </div>
          </div>
        </article>
      </section>

      <section id="publications" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-8 md:py-12">
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">02 · Publications</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Papers and manuscripts</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">Working papers, publications, and other research outputs will collect here as the portfolio develops.</p>
        </div>

        <article className="grid gap-6 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 dark:border-slate-800/80 dark:bg-slate-900/65 md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <div className="inline-flex rounded-full border border-amber-300/50 bg-amber-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">{RESEARCH_PUBLICATION.status}</div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight">{RESEARCH_PUBLICATION.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{RESEARCH_PUBLICATION.year} · Related project: {RESEARCH_PROJECT.title}</p>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 dark:text-slate-300">{RESEARCH_PUBLICATION.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {RESEARCH_PUBLICATION.highlights.map((highlight) => <span key={highlight} className="rounded-xl border border-slate-200/70 bg-slate-50/80 px-3 py-2 text-xs leading-5 text-slate-600 dark:border-slate-800/70 dark:bg-slate-950/55 dark:text-slate-300">{highlight}</span>)}
            </div>
          </div>
          <div className="flex items-start gap-3 md:flex-col">
            <a href={RESEARCH_PUBLICATION.pdfUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">Open PDF</a>
            <a href={RESEARCH_PROJECT.repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:border-brand/60 dark:border-slate-700">View code</a>
          </div>
        </article>
      </section>

      <section id="interests" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-8 md:py-12">
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">03 · Research interests</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Where I want to keep exploring</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {researchInterests.map((interest) => (
            <article key={interest.title} className="rounded-[1.7rem] border border-slate-200/70 bg-white/85 p-6 dark:border-slate-800/80 dark:bg-slate-900/60">
              <h3 className="text-lg font-semibold tracking-tight">{interest.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{interest.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">{interest.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-300/70 px-2.5 py-1 text-[11px] font-medium dark:border-slate-700/80">{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-[2rem] bg-slate-950 p-6 text-white dark:border dark:border-slate-800/80 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">PhD outreach & collaboration</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Interested in the work or a related direction?</h2>
              <p className="mt-4 text-sm leading-8 text-slate-300">I am open to PhD opportunities and research collaborations across software engineering, systems, data-intensive platforms, applied AI, and computer vision.</p>
            </div>
            <a href={`mailto:${SITE.email}`} className="shrink-0 rounded-xl bg-white px-5 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200">Start a conversation</a>
          </div>
        </div>
      </section>
    </main>
  )
}
