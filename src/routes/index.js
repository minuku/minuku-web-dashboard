import React from "react";

import { history } from "utils/history";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "containers/PrivateRoute";

import Schema from "containers/Schema";
import Monitor from "pages/Monitor";
import Situation from "containers/Situation";
import Schedule from "pages/Schedule";
import * as Questionnaires from "containers/Questionnaires";
import Index from "containers/Index";
import Data from "containers/Data";
import UserProfile from "pages/UserProfile";
import * as Account from "containers/Account";

const RootRouter = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Index} />
      <PrivateRoute path="/dashboard/profile" component={UserProfile} />
      <PrivateRoute
        path="/dashboard/project/:projectName/schema"
        component={Schema}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/situation"
        component={Situation}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/questionnaire/new"
        component={Questionnaires.New}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/questionnaire/:questionnaireName/edit"
        component={Questionnaires.Edit}
      />
      <PrivateRoute
        path="/dashboard/project/:projectName/questionnaire"
        component={Questionnaires.Index}
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
