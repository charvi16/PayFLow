import { Area, AreaChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import SectionHeader from '../components/SectionHeader';
import { monthlyData, spendingData } from '../data/mockData';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Analytics" subtitle="Premium insights screen for spend analysis, income trends, and future AI recommendations." />
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-white">Cashflow trends</h3>
          <div className="mt-6 h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="spentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00a8ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00a8ff" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="spent" stroke="#00a8ff" fill="url(#spentGradient)" strokeWidth={3} />
                <Area type="monotone" dataKey="received" stroke="#22c55e" fill="rgba(34,197,94,0.08)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-white">Spending mix</h3>
          <div className="mt-6 h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={spendingData} dataKey="value" nameKey="name" outerRadius={120} innerRadius={78} fill="#00a8ff" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {spendingData.map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-slate-400">{item.name}</p>
                <p className="mt-2 font-semibold text-white">₹{item.value.toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
