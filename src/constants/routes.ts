export const ROUTES = {
  home: "/",
  signIn: "/user/sign-in",
  registration: "/user/register",
  profilesEdit: "/user/profiles-edit",
  profiles: "/user/profiles",
  transactions: "/transactions/all",
  transactionInput: "/transactions/input",
  transactionEdit: "/transactions/trans-edit/:id",
};

export const ROUTES_PATH_NAME = {
  "": "Home",
  transactions: "Transactions",
  all: "All transactions",
  input: "Create transaction",
  "trans-edit": "Edit transaction",
};

export const breadcrumbNameMap: Record<string, string> = {
  "/transactions": "Transactions",
  "/transactions/all": "All transactions",
  "/transactions/input": "Create transaction",
  "/transactions/trans-edit": "Edit transaction",
  "/user": "User",
  "/user/profiles": "Profiles",
};
