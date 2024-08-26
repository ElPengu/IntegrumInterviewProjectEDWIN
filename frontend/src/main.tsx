import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./App.css";
import "./index.css"; /*Must import this so that
variables defined in it can be used!*/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
