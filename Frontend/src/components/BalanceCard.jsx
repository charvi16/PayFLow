import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export default function BalanceCard({ wallet, spent, received }) {
  return (
    <div className="card relative overflow-hidden p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-white/5" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-300">{wallet.label}</p>
            <h3 className="mt-3 text-4xl font-semibold tracking-tight text-white">₹{wallet.balance.toLocaleString('en-IN')}</h3>
            <p className="mt-2 text-sm text-slate-400">Card {wallet.cardNumber}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-right backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Cashback</p>
            <p className="mt-1 text-lg font-semibold text-white">₹{wallet.cashback}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ArrowUpRight size={16} className="text-success" /> Received
            </div>
            <p className="mt-2 text-2xl font-semibold">₹{received.toLocaleString('en-IN')}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ArrowDownLeft size={16} className="text-danger" /> Spent
            </div>
            <p className="mt-2 text-2xl font-semibold">₹{spent.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
