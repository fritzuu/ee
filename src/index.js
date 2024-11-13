// index.js (or wherever you initialize your app)
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

ReactDOM.render(
  <Router> {/* Wrap App in Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
