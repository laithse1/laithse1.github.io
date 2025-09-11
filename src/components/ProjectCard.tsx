type Project = {
  title: string; desc: string; impact?: string; tags: string[]; link: string; demo?: string;
}
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <a href={p.link} target="_blank" rel="noopener"
       className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 backdrop-blur p-5
                  shadow-[0_1px_0_0_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-brand/50 transition">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-lg tracking-tight group-hover:text-brand">{p.title}</h3>
        <span className="text-slate-400">↗</span>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
      {p.impact && <p className="mt-1 text-xs text-slate-500 font-mono">impact: {p.impact}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t, i) => (
          <span key={i} className="px-2 py-0.5 rounded-full text-xs border border-slate-300/70 dark:border-slate-700/70 bg-slate-50/50 dark:bg-slate-800/40">
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}
