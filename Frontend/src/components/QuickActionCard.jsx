export default function QuickActionCard({ title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="card group p-5 text-left transition hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.08]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-accent/20 to-white/10 text-lg font-semibold text-white">
        {title.charAt(0)}
      </div>
      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      <span className="mt-4 inline-block text-sm text-accent transition group-hover:translate-x-1">Open →</span>
    </button>
  );
}
