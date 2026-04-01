import { CreditCard, Home, QrCode, Send, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/dashboard', icon: Home, label: 'Home' },
  { path: '/send', icon: Send, label: 'Send' },
  { path: '/scan', icon: QrCode, label: 'Scan' },
  { path: '/transactions', icon: CreditCard, label: 'History' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export default function MobileNav() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 items-center justify-between rounded-[28px] border border-white/10 bg-slate-950/85 px-3 py-3 backdrop-blur-xl lg:hidden">
      {links.map(({ path, icon: Icon, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 text-[11px] font-medium ${
              isActive ? 'text-white' : 'text-slate-400'
            }`
          }
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${path === '/scan' ? 'bg-gradient-to-r from-accent to-accentDark text-white shadow-glow' : 'bg-white/5'}`}>
            <Icon size={18} />
          </div>
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  );
}
