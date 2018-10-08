import React from "react";

import { history } from "utils/history";
import { Route, Router, Switch, Redirect } from "react-router-dom";

import Profile from "pages/Profile";
import Condition from "pages/Condition";
import Project from "pages/Project";
import Monitor from "pages/Monitor";
import Situation from "pages/Situation";
import Data from "containers/Data";
import * as Account from "containers/Account";

const RootRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/dashboard" component={Profile} />
      <Route path="/dashboard/profile" component={Profile} />
      <Route path="/dashboard/condition" component={Condition} />
      <Route path="/dashboard/project" component={Project} />
      <Route path="/dashboard/data" component={Data} />
      <Route path="/dashboard/situation" component={Situation} />
      <Route path="/dashboard/monitor" component={Monitor} />
      {/* Account routes */}
      <Route path="/login" component={Account.Login} />
      <Route path="/signup" component={Account.Signup} />

      {/* Dashboard routes */}
      <Redirect to="/dashboard" />
    </Switch>
  </Router>
);

export default RootRouter;
