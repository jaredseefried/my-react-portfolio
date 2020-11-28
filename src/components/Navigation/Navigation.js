import React from "react";
import './navigation.css'

function Navigation() {
  return (
    <nav className="nav navbar-expand-lg">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link text-center" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="#">Contact</a>
        </li>
      </ul>
    </nav >
  )
}

export default Navigation;
