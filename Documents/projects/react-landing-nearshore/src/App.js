import React from "react";
import En from "./Components/En/En";
import Es from "./Components/Es/Es";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Helmet } from "react-helmet";

function App() {
  return (
    <BrowserRouter basename="/nearshore-software-development/">
      <Switch>
        <Route exact path="/" component={En} key="en" />
        <Route exact path="/es" component={Es} key="es" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
