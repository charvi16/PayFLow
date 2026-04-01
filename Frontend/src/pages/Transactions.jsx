import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import TransactionItem from '../components/TransactionItem';
import { useApp } from '../context/AppContext';

export default function Transactions() {
  const { transactions } = useApp();
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');

  const filtered = useMemo(() => {
    return transactions.filter((item) => {
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase());
      const matchesType = type === 'all' ? true : item.type === type;
      return matchesQuery && matchesType;
    });
  }, [transactions, query, type]);

  return (
    <div className="space-y-6">
      <SectionHeader title="Transactions" subtitle="Searchable, filterable history table ready for backend-driven pagination later." />
      <div className="card p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_220px_160px]">
          <input className="input" placeholder="Search merchant or category" value={query} onChange={(e) => setQuery(e.target.value)} />
          <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">All types</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
          <button className="glass-button">Export CSV</button>
        </div>

        <div className="mt-6 space-y-3">
          {filtered.map((item) => (
            <TransactionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
