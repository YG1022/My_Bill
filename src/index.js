import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import AccountBook from './pages/AccountBook/AccountBook';
import InputAmount from './pages/InputAmount/InputAmount';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/input" element={<InputAmount />} />
          <Route path="/bills" element={<AccountBook />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
