export const ROUTES = {
  home: '/',
  registration: '/user/Register',
  profilesEdit: '/user/profiles-edit',
  transactions: '/transactions/all',
  transactionInput: '/transactions/input',
  transactionEdit: '/transactions/trans-edit/:id',
};

export const ROUTES_PATH_NAME = {
  '': 'Home',
  transactions: 'Transactions',
  all: 'All transactions',
  input: 'Create transaction',
  'trans-edit': 'Edit transaction',
};

export const breadcrumbNameMap: Record<string, string> = {
  '/transactions': 'Transactions',
  '/transactions/all': 'All transactions',
  '/transactions/input': 'Create transaction',
  '/transactions/trans-edit': 'Edit transaction',
};
