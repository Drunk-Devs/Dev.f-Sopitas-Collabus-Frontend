import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import Login from 'components/auth/Login';
import Logout from 'components/auth/Logout';

import '../resources/bootstrap-4.5.0/css/bootstrap.min.css'

function App(props)
{
  return (
    <div>
      <Router>
        <Switch>
          <Route path={`/app`} component={Home} />
          <Route path={`/login`} component={Login} />
          <Route path={`/logout`} component={Logout} />
          <Redirect to={`/app`} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;