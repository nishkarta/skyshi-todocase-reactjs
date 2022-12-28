import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter } from 'react-router-dom';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);


