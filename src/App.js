import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">cart</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        {/* <NavLink to="/about">About</NavLink> */}
        <h1>My shopping card...</h1>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
