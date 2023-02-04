import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reducer, { initialState } from "./components/Reducer";
import { StateProvider } from "./components/StateProvide";

createRoot(document.getElementById("root")).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);