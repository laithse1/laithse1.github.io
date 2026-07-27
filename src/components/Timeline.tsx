import DOMPurify from 'isomorphic-dompurify'

type Role = { company: string; role: string; period: string; bullets: string[] }

export default function Timeline({ roles }: { roles: Role[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-3 top-0 w-px bg-slate-200 dark:bg-slate-800" />
      {roles.map((r, idx) => (
        <article key={`${r.company}-${r.role}`} className="relative pl-10 pb-9 last:pb-0">
          <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand shadow ring-4 ring-white dark:ring-slate-950" />
          <h3 className="font-semibold leading-6">
            {r.role} <span className="text-slate-400">at</span> <span className="text-brand">{r.company}</span>
          </h3>
          <div className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">{r.period}</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {r.bullets.map((b, i) => {
              const safe = DOMPurify.sanitize(b, {
                USE_PROFILES: { html: true },
                ADD_ATTR: ['target', 'rel']
              })
              return <li key={i} dangerouslySetInnerHTML={{ __html: safe }} />
            })}
          </ul>
        </article>
      ))}
    </div>
  )
}
