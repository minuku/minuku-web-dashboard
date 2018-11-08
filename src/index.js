import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'

import RootRouter from "routes";


import { configureFakeBackend } from "utils/fakeBackend";
import registerServiceWorker from "./registerServiceWorker";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { customizeTheme } from "utils/customizeTheme";

// redux data flow
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// setup fake backend
configureFakeBackend();

// customize mui theme
const theme = createMuiTheme(customizeTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <DragDropContextProvider backend={HTML5Backend}>
        <RootRouter />
      </DragDropContextProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
