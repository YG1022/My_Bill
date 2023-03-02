import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import AccountBook from './pages/AccountBook/AccountBook';
import InputAmount from './pages/InputAmount/InputAmount';
import { ROUTES } from './constants/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={ROUTES.home} element={<App />}>
          <Route path={ROUTES.input} element={<InputAmount />} />
          <Route path={ROUTES.bills} element={<AccountBook />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
