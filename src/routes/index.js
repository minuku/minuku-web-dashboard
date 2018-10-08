
import React from 'react'

import PrivateRoute from "containers/PrivateRoute.jsx"
import { history } from "utils/history"
import { Route, Router, Switch, Redirect } from "react-router-dom"

import Profile from 'layouts/Profile'
import Condition from 'layouts/Condition'
import Project from 'layouts/Project'
import Data from 'layouts/Project'
import * as Account from 'layouts/Account'

const RootRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/dashboard' component={ Profile } />
      <Route path='/dashboard/profile' component={ Profile } />
      <Route path='/dashboard/condition' component={ Condition } />
      <Route path='/dashboard/project' component={ Project } />
      <Route path='/dashboard/data' component={ Data } />
      {/* Account routes */}
      <Route path='/login' component={ Account.Login } />
      <Route path='/signup' component={ Account.Signup } />

      {/* Dashboard routes */}
      <Redirect to='/dashboard' />
    </Switch>
  </Router>
)

export default RootRouter
