import SectionHeader from '../components/SectionHeader';
import { useApp } from '../context/AppContext';

export default function Profile() {
  const { currentUser } = useApp();

  return (
    <div className="space-y-6">
      <SectionHeader title="Profile" subtitle="Keep this page dynamic so you can later bind it to /users/me and profile update APIs." />
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="card p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-accent to-accentDark text-2xl font-bold text-white shadow-glow">
              {currentUser.avatar}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{currentUser.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{currentUser.username}</p>
              <span className="mt-3 inline-block rounded-full border border-success/20 bg-success/10 px-3 py-1 text-xs text-success">{currentUser.kycStatus}</span>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Email: {currentUser.email}</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">Phone: {currentUser.phone}</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">City: {currentUser.city}</div>
          </div>
          <button className="primary-button mt-6 w-full">Edit profile</button>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-white">Personal details</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="input" defaultValue={currentUser.name} placeholder="Full name" />
            <input className="input" defaultValue={currentUser.email} placeholder="Email" />
            <input className="input" defaultValue={currentUser.phone} placeholder="Phone number" />
            <input className="input" defaultValue={currentUser.city} placeholder="City" />
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="font-medium text-white">KYC & Security</h4>
            <p className="mt-2 text-sm text-slate-400">Verified identity, device trust, and secure login methods should be connected to backend security endpoints later.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="glass-button">Verify KYC</button>
              <button className="glass-button">Change PIN</button>
              <button className="glass-button">Manage devices</button>
            </div>
          </div>
          <button className="primary-button mt-6">Save changes</button>
        </div>
      </div>
    </div>
  );
}
