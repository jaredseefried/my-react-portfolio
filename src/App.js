import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/pages/Home/Home";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Conatct from './components/pages/Contact/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Conatct} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
