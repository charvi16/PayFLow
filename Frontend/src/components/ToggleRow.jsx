export default function ToggleRow({ item, onToggle }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div>
        <h4 className="font-medium text-white">{item.title}</h4>
        <p className="mt-1 text-sm text-slate-400">{item.description}</p>
      </div>
      <button
        onClick={() => onToggle(item.id)}
        className={`relative h-7 w-14 rounded-full transition ${item.enabled ? 'bg-accent' : 'bg-white/10'}`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${item.enabled ? 'left-8' : 'left-1'}`}
        />
      </button>
    </div>
  );
}
