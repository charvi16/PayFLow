import { CreditCard, Bell, ChartColumnBig, Home, QrCode, Send, Settings, User, Wallet } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Dashboard', path: '/dashboard', icon: Home },
  { label: 'Wallet', path: '/wallet', icon: Wallet },
  { label: 'Send', path: '/send', icon: Send },
  { label: 'Scan', path: '/scan', icon: QrCode },
  { label: 'Transactions', path: '/transactions', icon: CreditCard },
  { label: 'Analytics', path: '/analytics', icon: ChartColumnBig },
  { label: 'Notifications', path: '/notifications', icon: Bell },
  { label: 'Profile', path: '/profile', icon: User },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-4 hidden h-[calc(100vh-2rem)] w-[280px] shrink-0 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl lg:flex lg:flex-col">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accentDark text-lg font-bold text-white shadow-glow">
          P
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight">PayFlow</p>
          <p className="text-xs text-slate-400">Modern payments, reimagined</p>
        </div>
      </div>

      <nav className="space-y-2">
        {links.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-gradient-to-r from-accent/30 to-accentDark/30 text-white shadow-glow'
                  : 'text-slate-300 hover:bg-white/8 hover:text-white'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-[28px] border border-accent/20 bg-gradient-to-br from-accent/20 to-transparent p-4">
        <p className="text-sm font-semibold">Premium Rewards</p>
        <p className="mt-2 text-xs leading-5 text-slate-300">Unlock cashback boosters, spend insights, and branded cards for your users.</p>
        <button className="primary-button mt-4 w-full">Upgrade Experience</button>
      </div>
    </aside>
  );
}
