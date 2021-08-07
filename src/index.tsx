import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./reduxStore/store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
