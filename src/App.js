import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { configStore } from "./state/store/configStore";
import { Home } from "./components/Home";

export const App = () => {
  const localStore = configStore();
  return (
    <div>
      <Provider store={localStore}>
        <Home />
      </Provider>
    </div>
  );
};
