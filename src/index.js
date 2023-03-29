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
import SignIn from './pages/SignIn/SignIn';
import { authRoute } from './utils/authRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={ROUTES.signIn} element={<SignIn />} />
        <Route path={ROUTES.registration} element={<Registration />} />
        <Route path={ROUTES.profilesEdit} element={authRoute(<EditProfiles />)} />
        <Route path={ROUTES.home} element={authRoute(<App />)}>
          <Route index element={authRoute(<HomePage />)} />
          <Route path={ROUTES.transactionInput} element={authRoute(<InputAmount />)} />
          <Route path={ROUTES.transactions} element={authRoute(<AccountBook />)} />
          <Route path={ROUTES.transactionEdit} element={authRoute(<InputAmount />)} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
