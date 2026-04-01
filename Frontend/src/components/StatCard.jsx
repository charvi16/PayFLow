export default function StatCard({ label, value, detail }) {
  return (
    <div className="card p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{value}</h3>
      <p className="mt-2 text-xs text-slate-500">{detail}</p>
    </div>
  );
}
