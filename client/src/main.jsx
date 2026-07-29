// Suppress third-party Three.js deprecation warnings in production console
const originalWarn = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string' && (args[0].includes('THREE.Clock') || args[0].includes('Clock: This module has been deprecated'))) {
    return;
  }
  originalWarn(...args);
};

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
