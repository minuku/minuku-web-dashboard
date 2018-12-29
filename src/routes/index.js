import React from "react";

import { history } from "utils/history";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "containers/PrivateRoute";

import Project from "pages/Project";
import Monitor from "pages/Monitor";
import Situation from "containers/Situation";
import Condition from "pages/Condition";
import Schedule from "pages/Schedule";
import Questionnaire from "pages/Questionnaire";
import Profile from "containers/Profile";
import Data from "containers/Data";
import UserProfile from "pages/UserProfile";
import * as Account from "containers/Account";

const RootRouter = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Profile} />
      <PrivateRoute path="/dashboard/profile" component={UserProfile} />
      <PrivateRoute
        path="/dashboard/project/:projectName/schema"
        component={Project}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/situation"
        component={Situation}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/questionnaire"
        component={Questionnaire}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/schedule"
        component={Schedule}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/data"
        component={Data}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/monitor"
        component={Monitor}
      />
      {/* Account routes */}
      <Route path="/login" component={Account.Login} />
      <Route path="/signup" component={Account.Signup} />

      {/* Dashboard routes */}
      <Redirect to="/dashboard" />
    </Switch>
  </Router>
);

export default RootRouter;
