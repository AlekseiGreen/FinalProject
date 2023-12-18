import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './style/Section_four/Section_four.css';
import './style/Footer/Footer.css';
import './style/MainAcc/MainAcc.css';
import './style/FindMain/FindMain.css';
import './style/FindCard/FindCard.css';
import './style/ResultMain/ResultMain.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);
