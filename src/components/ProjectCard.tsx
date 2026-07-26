type Project = {
  title: string;
  category: string;
  desc: string;
  impact?: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        {p.category}
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold leading-tight tracking-tight group-hover:text-brand">{p.title}</h3>
        <span className="shrink-0 text-lg text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{p.desc}</p>
      {p.impact && (
        <p className="mt-4 border-l-2 border-brand/30 pl-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-200">What it demonstrates:</span> {p.impact}
        </p>
      )}
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full border border-slate-300/70 bg-slate-50/50 px-2.5 py-1 text-[11px] font-medium dark:border-slate-700/70 dark:bg-slate-800/40">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
