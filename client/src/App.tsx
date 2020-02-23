import React from 'react';
import './styles/global.scss';
import './styles/bootstrap-utilities.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";

const App = () => (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/auth/login">
                    <Login />
                </Route>
                <Route path="/auth/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    </div>
);

export default App;