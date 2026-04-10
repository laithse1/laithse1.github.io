import type { Metadata } from 'next'
import Header from '../../components/Header'
import { RESEARCH_PROJECT, RESEARCH_PUBLICATION } from '../../data/research'
import { SITE } from '../../data/site.config'

export const metadata: Metadata = {
  title: 'Research | Laith Alkhalil-AlHamed',
  description:
    'Research projects, manuscript draft, and broader PhD interests across software engineering and computer science, anchored by current work in reproducible experimental systems.'
}

const researchThemes = [
  {
    title: 'Research framing',
    body:
      'My current project uses kinship verification as a concrete research vehicle, while my broader PhD interests remain open across software engineering and computer science. The work emphasizes rigor, reproducibility, and extensible experimentation.'
  },
  {
    title: 'Technical depth',
    body:
      'The toolkit spans classical handcrafted descriptors, metric-learning workflows, native deep-learning pipelines, and Gated Autoencoder-style pair modeling under one consistent experimental interface.'
  },
  {
    title: 'PhD-ready signal',
    body:
      'The combination of a manuscript draft, research infrastructure, and dataset-centric experimentation gives faculty a concrete way to assess fit, rigor, and publication potential.'
  }
] as const

const researchPillars = [
  'Reproducible experimentation',
  'Computer vision for kinship verification',
  'Benchmark comparison across model families',
  'Private dataset staging and analysis',
  'Paper-ready reporting and ablation support',
  'Extensible research tooling for follow-on work'
] as const

export default function ResearchPage() {
  return (
    <main>
      <Header />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_center,rgba(15,23,42,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.32),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_center,rgba(30,41,59,0.55),transparent_55%)]" />
        <div className="research-pulse absolute right-[8%] top-28 -z-10 hidden h-36 w-36 rounded-full bg-brand/20 blur-3xl md:block" />
        <div className="research-float absolute left-[10%] top-40 -z-10 hidden h-24 w-24 rounded-full bg-emerald-400/20 blur-3xl md:block" />

        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 md:pb-20 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                Research and Publications
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                Research Portfolio for PhD Opportunities in Computer Science
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                I am building a research portfolio anchored by a kinship-verification project and manuscript, while
                remaining broadly open to PhD opportunities across software engineering and computer science. This page
                highlights the project, publication draft, and research direction I can share directly with prospective
                PhD advisors.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={RESEARCH_PUBLICATION.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand/90"
                >
                  Read manuscript draft
                </a>
                <a
                  href={RESEARCH_PROJECT.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:border-brand/60 dark:border-slate-700"
                >
                  View research repository
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:border-brand/60 dark:border-slate-700"
                >
                  Contact for collaboration
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {RESEARCH_PROJECT.focusAreas.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand/20 via-cyan-400/10 to-emerald-400/15 blur-2xl" />
              <div className="relative rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.8)] dark:border-slate-800/80 dark:bg-slate-900/75 md:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Research snapshot
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {RESEARCH_PROJECT.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800/80 dark:bg-slate-950/60"
                    >
                      <div className="text-2xl font-bold tracking-tight md:text-3xl">{stat.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-5 dark:border-slate-800/70 dark:bg-slate-950/55">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Current project focus
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Building publication-ready research infrastructure for a difficult biometric task where inherited
                    resemblance must be distinguished from identity, age, pose, and image-quality variation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {researchThemes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-[1.8rem] border border-slate-200/70 bg-white/85 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60"
            >
              <h2 className="text-lg font-semibold tracking-tight">{theme.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{theme.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 dark:border-slate-800/80 dark:bg-slate-900/65 md:p-8">
            <div className="inline-flex items-center rounded-full border border-amber-300/50 bg-amber-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
              {RESEARCH_PUBLICATION.status}
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">{RESEARCH_PUBLICATION.title}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">
              Manuscript draft | {RESEARCH_PUBLICATION.year}
            </p>
            <p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-300">
              {RESEARCH_PUBLICATION.summary}
            </p>

            <div className="mt-6 space-y-3">
              {RESEARCH_PUBLICATION.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 text-sm leading-7 text-slate-600 dark:border-slate-800/70 dark:bg-slate-950/55 dark:text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={RESEARCH_PUBLICATION.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Open PDF
              </a>
              <a
                href={RESEARCH_PROJECT.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:border-brand/60 dark:border-slate-700"
              >
                View code and experiments
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 dark:border-slate-800/80 dark:bg-slate-900/65 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Research project
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">{RESEARCH_PROJECT.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{RESEARCH_PROJECT.subtitle}</p>
            <p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-300">
              {RESEARCH_PROJECT.summary}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/80 p-5 dark:border-slate-800/70 dark:bg-slate-950/55">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  Problem
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {RESEARCH_PROJECT.problem}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/80 p-5 dark:border-slate-800/70 dark:bg-slate-950/55">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  Outcome
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  A clean base for reproducible experiments, comparative benchmarks, publication support, and future
                  advisor-led extensions.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-5 dark:border-slate-800/70 dark:bg-slate-950/45">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  Approach
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {RESEARCH_PROJECT.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-5 dark:border-slate-800/70 dark:bg-slate-950/45">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  Contributions
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {RESEARCH_PROJECT.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 dark:border-slate-800/80 dark:bg-slate-900/65 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                What I would bring to a lab
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Research infrastructure, experimental rigor, and room to scale
              </h2>
            </div>
            <a
              href={RESEARCH_PROJECT.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand hover:underline"
            >
              Explore repository details
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {researchPillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-[1.4rem] border border-slate-200/70 bg-slate-50/80 px-4 py-4 text-sm font-medium text-slate-700 dark:border-slate-800/70 dark:bg-slate-950/55 dark:text-slate-200"
              >
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-14">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-200/70 bg-slate-950 px-6 py-8 text-white dark:border-slate-800/80 md:px-10 md:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_28%)]" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                Faculty outreach
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Happy to share the manuscript, codebase, and broader research interests directly
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-300">
                I am broadly open to PhD opportunities across software engineering and computer science, and I am
                flexible about research direction. I would be glad to share the paper draft and discuss how my project
                and engineering experience could contribute to a wide range of research areas, including but not limited
                to software engineering, systems, data-intensive platforms, applied AI, and other rigorous CS research
                environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                {SITE.email}
              </a>
              <a
                href="/#contact"
                className="rounded-xl border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/50"
              >
                Back to contact section
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
