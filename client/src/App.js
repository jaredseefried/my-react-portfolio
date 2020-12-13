import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.js";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Contact from './pages/Contact/Contact'
import FrontEndDev from "./pages/FrontEndDev/FrontEndDev.js";
import BackEndDev from "./pages/BackEndDev/BackEndDev";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/front-end-dev" component={FrontEndDev} />
        {/* <Route exact path="/back-end-dev" component={BackEndDev} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
