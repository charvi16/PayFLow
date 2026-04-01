import SectionHeader from '../components/SectionHeader';
import { useApp } from '../context/AppContext';

export default function Wallet() {
  const { wallets, selectedWalletId, setSelectedWalletId } = useApp();

  return (
    <div className="space-y-6">
      <SectionHeader title="Wallets" subtitle="Dynamic wallet cards ready to be fetched from your backend later." />

      <div className="grid gap-6 lg:grid-cols-2">
        {wallets.map((wallet) => (
          <button
            key={wallet.id}
            onClick={() => setSelectedWalletId(wallet.id)}
            className={`card overflow-hidden p-6 text-left transition ${selectedWalletId === wallet.id ? 'border-accent/50 shadow-glow' : 'hover:border-white/20'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{wallet.label}</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">₹{wallet.balance.toLocaleString('en-IN')}</h3>
                <p className="mt-2 text-sm text-slate-500">Card {wallet.cardNumber}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white">{wallet.currency}</span>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm text-slate-400">
              <span>Cashback</span>
              <span className="font-semibold text-white">₹{wallet.cashback}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-white">Add money</h3>
          <p className="mt-2 text-sm text-slate-400">Connect this to your future backend API for wallet top-ups.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input className="input" placeholder="Enter amount" type="number" />
            <select className="input">
              <option>Choose payment method</option>
              <option>UPI</option>
              <option>Debit Card</option>
              <option>Net Banking</option>
            </select>
          </div>
          <button className="primary-button mt-5">Add Money</button>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-white">Linked instruments</h3>
          <div className="mt-5 space-y-3">
            {['HDFC Bank **** 9012', 'Axis Bank **** 9911', 'Visa Card **** 3024'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
          <button className="glass-button mt-5 w-full">Manage Accounts</button>
        </div>
      </div>
    </div>
  );
}
