import React from "react";
import "./styles/global.scss";
import "./styles/bootstrap-utilities.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import AppRouter from "./components/routing/app-router";

const App = () => (
  <div className="App">
    <Router>
      <AppRouter />
    </Router>
  </div>
);

export default App;
