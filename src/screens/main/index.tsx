import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = require("./App");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch></Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
