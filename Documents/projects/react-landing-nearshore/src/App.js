import React from "react";
import En from "./Components/En/En";
import Es from "./Components/Es/Es";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={En} />
        <Route exact path="/es" component={Es} />
      </Switch>
    </Router>
  );
}

export default App;
