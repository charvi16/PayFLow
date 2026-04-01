import SectionHeader from '../components/SectionHeader';
import { useApp } from '../context/AppContext';

export default function Notifications() {
  const { notifications } = useApp();

  return (
    <div className="space-y-6">
      <SectionHeader title="Notifications" subtitle="All payment, reward, and security updates in one feed." />
      <div className="card p-5">
        <div className="space-y-4">
          {notifications.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <span className="text-xs text-slate-400">{item.time}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
              <div className="mt-4 flex gap-3">
                <button className="glass-button">Mark read</button>
                <button className="glass-button">View details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
