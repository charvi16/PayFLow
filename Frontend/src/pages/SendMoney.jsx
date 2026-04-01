import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useApp } from '../context/AppContext';

export default function SendMoney() {
  const { contacts, addNotification, addTransaction } = useApp();
  const [search, setSearch] = useState('');
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('Dinner split');

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()) || contact.handle.toLowerCase().includes(search.toLowerCase()));
  }, [contacts, search]);

  const handlePay = () => {
    if (!selectedContact || !amount) return;
    addTransaction({
      name: selectedContact.name,
      category: 'P2P',
      type: 'debit',
      amount: Number(amount),
      status: 'Successful',
    });
    addNotification({
      title: 'Payment sent',
      body: `₹${amount} sent to ${selectedContact.name}`,
      time: 'Just now',
      level: 'success',
    });
    setAmount('');
    setNote('');
  };

  return (
    <div className="space-y-6">
      <SectionHeader title="Send money" subtitle="Dynamic payment form that can later connect to /payments, /beneficiaries, and /wallet endpoints." />
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-white">Choose recipient</h3>
          <input className="input mt-4" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, handle, or UPI" />
          <div className="mt-5 space-y-3">
            {filteredContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition ${selectedContact?.id === contact.id ? 'border-accent/40 bg-accent/10' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 font-semibold text-white">{contact.avatar}</div>
                <div>
                  <p className="font-medium text-white">{contact.name}</p>
                  <p className="text-sm text-slate-400">{contact.handle} • {contact.bank}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-white">Transfer details</h3>
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">Paying</p>
            <p className="mt-2 text-2xl font-semibold text-white">{selectedContact?.name}</p>
            <p className="mt-1 text-sm text-slate-500">{selectedContact?.handle}</p>
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-400">Amount</label>
              <input className="input text-3xl font-semibold" type="number" placeholder="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-400">Note</label>
              <input className="input" value={note} onChange={(e) => setNote(e.target.value)} placeholder="What is this payment for?" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-400">Pay from</label>
              <select className="input">
                <option>PayFlow Wallet</option>
                <option>HDFC Bank</option>
                <option>Axis Bank</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button className="glass-button flex-1">Cancel</button>
            <button className="primary-button flex-1" onClick={handlePay}>Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
