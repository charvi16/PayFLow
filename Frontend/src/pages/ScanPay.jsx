import { Flashlight, Keyboard, QrCode } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function ScanPay() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Scan & Pay" subtitle="Scanner screen mockup designed for future camera or QR parser integration." />
      <div className="card overflow-hidden p-6">
        <div className="relative mx-auto flex min-h-[520px] max-w-md items-center justify-center rounded-[36px] border border-white/10 bg-gradient-to-b from-panelSoft to-midnight p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,255,0.16),transparent_45%)]" />
          <div className="relative z-10 w-full">
            <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-[32px] border border-dashed border-accent/50 bg-white/[0.03]">
              <QrCode size={72} className="text-accent" />
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">Point your camera at any UPI QR code to pay instantly.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="glass-button gap-2"><Flashlight size={16} /> Flash</button>
              <button className="glass-button gap-2"><Keyboard size={16} /> Enter ID</button>
            </div>
            <button className="primary-button mt-4 w-full">Open Scanner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
