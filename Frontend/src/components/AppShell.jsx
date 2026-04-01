import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MobileNav from './MobileNav';

export default function AppShell() {
  return (
    <div className="min-h-screen bg-hero-radial">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-4 md:px-6 lg:px-8">
        <Sidebar />
        <div className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
          <Topbar />
          <main className="flex-1 px-4 pb-24 pt-4 md:px-6 md:pb-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
