import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.js";  // Thisnpm sta matches the file App.js

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
