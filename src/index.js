import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./components/Reducer";
import { StateProvider } from "./components/StateProvide";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
