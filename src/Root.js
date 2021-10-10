import React from 'react';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";
import Main from './Main.js';
import Login from './views/login.js';
import Register from './views/register.js';

const Root = (props) => (
    <Router>
        <Switch>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/Register">
                <Register />
            </Route>
            <Route path="/" exact>
                <Main />
            </Route>
        </Switch> 
    </Router>
);


export default Root;