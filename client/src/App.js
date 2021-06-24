import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "./components/screens";
import { Logo } from "./components/common";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
