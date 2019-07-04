import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthStore } from './contexts/AuthStore';
import 'antd-mobile/dist/antd-mobile.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    < AuthStore>
     <App />
    </AuthStore> 
  </Router>
  ,document.getElementById('root'));