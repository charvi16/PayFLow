import { Bell, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Topbar() {
  const { currentUser } = useApp();

  return (
    <header className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
      <div>
        <p className="text-sm text-slate-400">Welcome back</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{currentUser.name}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden min-w-[280px] md:block">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input className="input pl-10" placeholder="Search payments, users, or merchants" />
        </div>
        <button className="glass-button h-12 w-12 rounded-2xl p-0">
          <Bell size={18} />
        </button>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white">
          {currentUser.avatar}
        </div>
      </div>
    </header>
  );
}
