import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import firebase from "firebase/compat/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
