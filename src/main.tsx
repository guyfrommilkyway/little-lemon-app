// packages below
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

// components below
import App from './App.tsx';

// assets below
import './index.css';
import '../node_modules/react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>,
);
