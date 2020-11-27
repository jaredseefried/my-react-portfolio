import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "../src/components/Navigation";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
