import { useNavigate } from 'react-router-dom';
import BalanceCard from '../components/BalanceCard';
import QuickActionCard from '../components/QuickActionCard';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import TransactionItem from '../components/TransactionItem';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { selectedWallet, quickActions, totals, transactions, notifications } = useApp();

  const routeMap = {
    send: '/send',
    scan: '/scan',
    request: '/send',
    add: '/wallet',
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Dashboard"
        subtitle="Track wallet balance, quick actions, and your latest activity in one place."
      />

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <BalanceCard wallet={selectedWallet} spent={totals.spent} received={totals.received} />
        <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          <StatCard label="This Month" value="₹26,800" detail="Current debit volume" />
          <StatCard label="Cashback Earned" value="₹840" detail="Across rewards and merchant offers" />
          <StatCard label="Fraud Score" value="Low Risk" detail="No unusual payment spikes detected" />
        </div>
      </div>

      <section>
        <SectionHeader title="Quick actions" subtitle="Designed to map directly to your backend routes later." />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <QuickActionCard
              key={action.id}
              title={action.title}
              description={action.description}
              onClick={() => navigate(routeMap[action.id])}
            />
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="card p-5">
          <SectionHeader
            title="Recent transactions"
            subtitle="Your latest wallet activity"
            action={<button onClick={() => navigate('/transactions')} className="glass-button">View all</button>}
          />
          <div className="space-y-3">
            {transactions.slice(0, 5).map((item) => (
              <TransactionItem key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="card p-5">
          <SectionHeader
            title="Live notifications"
            subtitle="Smart alerts and security updates"
            action={<button onClick={() => navigate('/notifications')} className="glass-button">Open</button>}
          />
          <div className="space-y-3">
            {notifications.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
