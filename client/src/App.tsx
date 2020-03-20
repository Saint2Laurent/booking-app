import React from "react";
import "./styles/global.scss";
import "./styles/bootstrap-utilities.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routing/app-router";

const App = () => (
  <div className="App">
    <Router>
      <AppRouter />
    </Router>
  </div>
);

export default App;
