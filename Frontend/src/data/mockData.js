export const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Wallet', path: '/wallet' },
  { label: 'Send', path: '/send' },
  { label: 'Scan', path: '/scan' },
  { label: 'Transactions', path: '/transactions' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Notifications', path: '/notifications' },
  { label: 'Profile', path: '/profile' },
  { label: 'Settings', path: '/settings' },
];

export const user = {
  id: 'USR-9081',
  name: 'Charvi Agarwal',
  username: '@charvipay',
  email: 'charvi@example.com',
  phone: '+91 98765 43210',
  city: 'Bengaluru, India',
  kycStatus: 'Verified',
  avatar: 'CA',
};

export const wallets = [
  { id: 'main', label: 'PayFlow Wallet', balance: 26890.5, currency: 'INR', cashback: 840, cardNumber: '•••• 4812' },
  { id: 'savings', label: 'Smart Savings', balance: 112400, currency: 'INR', cashback: 0, cardNumber: '•••• 2209' },
];

export const quickActions = [
  { id: 'send', title: 'Send Money', description: 'Pay to contacts & UPI IDs' },
  { id: 'scan', title: 'Scan & Pay', description: 'Fast QR payments' },
  { id: 'request', title: 'Request', description: 'Ask friends to pay you' },
  { id: 'add', title: 'Add Money', description: 'Top up wallet instantly' },
];

export const contacts = [
  { id: 1, name: 'Aarav Mehta', handle: '@aarav', bank: 'HDFC Bank', avatar: 'AM' },
  { id: 2, name: 'Riya Sharma', handle: '@riya', bank: 'ICICI Bank', avatar: 'RS' },
  { id: 3, name: 'Kabir Khanna', handle: '@kabir', bank: 'SBI', avatar: 'KK' },
  { id: 4, name: 'Nisha Gupta', handle: '@nisha', bank: 'Axis Bank', avatar: 'NG' },
];

export const transactions = [
  { id: 1, name: 'Zomato', category: 'Food', type: 'debit', amount: 420, date: '2026-03-31T19:20:00', status: 'Successful' },
  { id: 2, name: 'Riya Sharma', category: 'P2P', type: 'credit', amount: 2500, date: '2026-03-31T10:40:00', status: 'Received' },
  { id: 3, name: 'Uber', category: 'Travel', type: 'debit', amount: 187, date: '2026-03-30T22:10:00', status: 'Successful' },
  { id: 4, name: 'Starbucks', category: 'Coffee', type: 'debit', amount: 340, date: '2026-03-30T09:15:00', status: 'Successful' },
  { id: 5, name: 'Salary Credit', category: 'Income', type: 'credit', amount: 45000, date: '2026-03-28T11:50:00', status: 'Settled' },
  { id: 6, name: 'Amazon Pay', category: 'Shopping', type: 'debit', amount: 1749, date: '2026-03-27T16:05:00', status: 'Successful' },
];

export const spendingData = [
  { name: 'Food', value: 8600 },
  { name: 'Shopping', value: 12400 },
  { name: 'Bills', value: 6200 },
  { name: 'Travel', value: 3900 },
  { name: 'Recharge', value: 1800 },
];

export const monthlyData = [
  { month: 'Oct', spent: 22800, received: 52000 },
  { month: 'Nov', spent: 24100, received: 53000 },
  { month: 'Dec', spent: 27900, received: 56000 },
  { month: 'Jan', spent: 25400, received: 57500 },
  { month: 'Feb', spent: 29100, received: 60200 },
  { month: 'Mar', spent: 26800, received: 59000 },
];

export const notifications = [
  { id: 1, title: 'Money received', body: '₹2,500 received from Riya Sharma', time: '10 min ago', level: 'success' },
  { id: 2, title: 'Smart alert', body: 'Your food spending is 18% higher this week', time: '1 hr ago', level: 'info' },
  { id: 3, title: 'Security', body: 'A new login was detected from your MacBook Pro', time: '3 hrs ago', level: 'warning' },
];

export const settings = [
  { id: 'biometric', title: 'Biometric Login', description: 'Use Face ID / fingerprint for quick access', enabled: true },
  { id: 'darkmode', title: 'Dark Mode', description: 'Use premium dark appearance across the app', enabled: true },
  { id: 'alerts', title: 'Spending Alerts', description: 'Get notified when unusual spends happen', enabled: true },
  { id: 'newsletter', title: 'Offers & Rewards', description: 'Receive cashback and merchant updates', enabled: false },
];
