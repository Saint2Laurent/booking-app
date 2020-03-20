import React from 'react';
import './styles/global.scss';
import './styles/bootstrap-utilities.css';
import AppRouter from './components/routing/app-router';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <Router>
      <AppRouter />
    </Router>
  </React.Fragment>
);

export default App;
