import { createContext, useContext, useMemo, useState } from 'react';
import {
  contacts as initialContacts,
  notifications as initialNotifications,
  quickActions,
  settings as initialSettings,
  transactions as initialTransactions,
  user,
  wallets,
} from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(user);
  const [allTransactions, setAllTransactions] = useState(initialTransactions);
  const [allNotifications, setAllNotifications] = useState(initialNotifications);
  const [allSettings, setAllSettings] = useState(initialSettings);
  const [selectedWalletId, setSelectedWalletId] = useState('main');

  const selectedWallet = wallets.find((wallet) => wallet.id === selectedWalletId) || wallets[0];

  const totals = useMemo(() => {
    return allTransactions.reduce(
      (acc, item) => {
        if (item.type === 'credit') acc.received += item.amount;
        if (item.type === 'debit') acc.spent += item.amount;
        return acc;
      },
      { spent: 0, received: 0 }
    );
  }, [allTransactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'Successful',
      ...transaction,
    };
    setAllTransactions((prev) => [newTransaction, ...prev]);
  };

  const addNotification = (notification) => {
    setAllNotifications((prev) => [{ id: Date.now(), ...notification }, ...prev]);
  };

  const toggleSetting = (id) => {
    setAllSettings((prev) => prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)));
  };

  const value = {
    currentUser,
    setCurrentUser,
    wallets,
    selectedWallet,
    selectedWalletId,
    setSelectedWalletId,
    quickActions,
    contacts: initialContacts,
    transactions: allTransactions,
    notifications: allNotifications,
    settings: allSettings,
    totals,
    addTransaction,
    addNotification,
    toggleSetting,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return context;
}
