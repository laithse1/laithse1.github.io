'use client'
import { SITE } from '../data/site.config'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pb-20 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Software engineer · AI & healthcare systems
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Building reliable software for complex, real-world problems.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            I design and build full-stack platforms across enterprise systems, healthcare imaging, applied AI, and
            research tooling—with a focus on clarity, resilience, and measurable impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
           {/*} <a href="#projects" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand/90">
              View selected work
            </a>*/}
          {/*} <a href={`mailto:${SITE.email}`} className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:border-brand/60 dark:border-slate-700">
              Get in touch
           </a>*/}
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            <div><span className="font-semibold text-slate-900 dark:text-slate-100">Full-stack</span><br />APIs to interfaces</div>
            <div><span className="font-semibold text-slate-900 dark:text-slate-100">Platform-minded</span><br />Secure and scalable</div>
            <div><span className="font-semibold text-slate-900 dark:text-slate-100">Research-aware</span><br />Reproducible systems</div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-brand/40 to-purple-500/40 blur" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <img
                src="/images/Photo.jpg"
                alt="Laith Alkhalil"
                className="aspect-[4/5] w-full rounded-2xl object-cover object-center ring-1 ring-slate-200 dark:ring-slate-800"
              />
              <div className="mt-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-800/70 dark:bg-slate-950/60">
                <div className="text-sm font-semibold">Engineering with context</div>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Experience spanning clinical imaging, enterprise platforms, cloud services, and applied machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
