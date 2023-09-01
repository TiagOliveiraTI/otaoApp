import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { KeycloakProvider } from './providers/KeycloakProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <KeycloakProvider>
    <App />
  </KeycloakProvider>
  </React.StrictMode>
  </Provider>
);