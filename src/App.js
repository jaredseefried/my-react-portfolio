import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Header from "./components/Header/Header"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
