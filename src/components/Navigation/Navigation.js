import React from "react";
import './navigation.css'

function Navigation() {
  return (
    <nav className="nav navbar-expand-lg">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/front-end-dev">Front End Dev</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/back-end-dev">Back End Dev</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </nav >
  )
}

export default Navigation;
