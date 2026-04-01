import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export default function TransactionItem({ item }) {
  const isCredit = item.type === 'credit';

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]">
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isCredit ? 'bg-success/15 text-success' : 'bg-danger/15 text-danger'}`}>
          {isCredit ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
        </div>
        <div>
          <h4 className="font-medium text-white">{item.name}</h4>
          <p className="mt-1 text-sm text-slate-400">{item.category} • {new Date(item.date).toLocaleString()}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-base font-semibold ${isCredit ? 'text-success' : 'text-white'}`}>
          {isCredit ? '+' : '-'}₹{item.amount.toLocaleString('en-IN')}
        </p>
        <p className="mt-1 text-xs text-slate-400">{item.status}</p>
      </div>
    </div>
  );
}
