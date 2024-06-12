import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/fontawesome-free-6.5.2-web/css/fontawesome.css'


const root = ReactDOM.createRoot(document.getElementById('app') );
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);