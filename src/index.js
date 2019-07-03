import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthStore } from './contexts/AuthStore';
import 'antd-mobile/dist/antd-mobile.css'; 
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    < AuthStore>
     <App />
    </AuthStore> 
  </Router>
  ,document.getElementById('root'));