import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.scss'
import App from './App'
import reportWebVitals from './utils/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <App />
  </Router>,
)

reportWebVitals()
