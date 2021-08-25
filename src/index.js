import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { configStore } from "./state/store/configStore";

import { Provider } from "react-redux";

const localStore = configStore();
ReactDOM.render(
  <Provider store={localStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
