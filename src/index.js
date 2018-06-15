import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { history } from "utils/history"
import { Route, Router, Switch } from "react-router-dom"

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import PrivateRoute from 'containers/PrivateRoute.jsx'
import Account from "layouts/Account/index.jsx"
import indexRoute from 'routes'

import { configureFakeBackend } from 'utils/fakeBackend'
import registerServiceWorker from './registerServiceWorker'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

// setup fake backend
configureFakeBackend()

const theme = createMuiTheme({
  typography: {
    headline: {
      fontSize: `1.25rem`,
    },
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {
            indexRoute.map((prop, key) => {
                return <PrivateRoute key={key} path={prop.path} component={prop.component} />
            })
          }
          <Route path="/" component={Account} />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
