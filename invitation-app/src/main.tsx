import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.tsx';

import 'bootstrap/dist/css/bootstrap.css';
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/js/bootstrap.bundle'

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
