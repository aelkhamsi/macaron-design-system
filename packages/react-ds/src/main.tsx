import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { environment } from './environment';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Set the prefix environment variable as a CSS custom property
document.documentElement.style.setProperty('--prefix', environment.prefix);
