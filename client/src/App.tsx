import React, { useEffect } from 'react';
import './styles/global.scss';
import './styles/bootstrap-utilities.css';
import AppRouter from './components/routing/app-router';
import { BrowserRouter as Router } from 'react-router-dom';
import useOnlineStatus from './hooks/use-is-online';

const App = () => {
  let isOnline = useOnlineStatus();

  useEffect(() => {
    console.log(isOnline);
  }, [isOnline]);

  return (
    <React.Fragment>
      <Router>
        <AppRouter />
      </Router>
    </React.Fragment>
  );
};

export default App;
