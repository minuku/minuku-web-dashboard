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
import { configureFakeBackend } from 'utils/fakeBackend'

import indexRoute from 'routes/index.js'
const history = createBrowserHistory()

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

// setup fake backend
configureFakeBackend()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {
          indexRoute.map((prop, key) => {
            return <Route
                    key={key}
                    path={localStorage.getItem('user') ? prop.path : '/'}
                    component={localStorage.getItem('user') ? prop.component : indexRoute[1].component}/>
          })
        }
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
