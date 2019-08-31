import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthStore } from './contexts/AuthStore';
import { PlayStore } from './contexts/PlayStore'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  < Router >
    < AuthStore >
      < PlayStore>
       < App />
      </PlayStore>
    </AuthStore > 
  </Router >
  ,document.getElementById('root'));