type Role = { company: string; role: string; period: string; bullets: string[] }
export default function Timeline({ roles }: { roles: Role[] }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
      {roles.map((r, idx) => (
        <div key={idx} className="relative pl-10 pb-8">
          <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand shadow ring-4 ring-white dark:ring-slate-950" />
          <h3 className="font-semibold">{r.role} · <span className="text-brand">{r.company}</span></h3>

          <div className="text-xs text-slate-500 mt-0.5">{r.period}</div>

          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">

            {r.bullets.map((b, i) => <li key={i}>{b}</li>)}

          </ul>

        </div>
      ))}
    </div>
  )
}
