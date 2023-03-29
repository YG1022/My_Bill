import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import HomePage from './pages/Home/HomePage';
import AccountBook from './pages/AccountBook/AccountBook';
import InputAmount from './pages/InputAmount/InputAmount';
import { ROUTES } from './constants/routes';
import Registration from './pages/Registration/Registration';
import EditProfiles from './pages/Registration/EditProfiles';
import Signin from './pages/Signin/Signin';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={ROUTES.signIn} element={<Signin />} />
        <Route path={ROUTES.registration} element={<Registration />} />
        <Route path={ROUTES.profilesEdit} element={<EditProfiles />} />
        <Route path={ROUTES.home} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.transactionInput} element={<InputAmount />} />
          <Route path={ROUTES.transactions} element={<AccountBook />} />
          <Route path={ROUTES.transactionEdit} element={<InputAmount />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
