import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

import indexRoute from 'routes/index.js'
const history = createBrowserHistory()

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {
          indexRoute.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key}></Route>
          })
        }
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
