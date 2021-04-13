import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink className="logo" activeStyle={{ color: "#E74C3C" }} to="/" exact>
        <h3>Тамагочи</h3>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink
            className="nav-links__item"
            activeClassName="selected"
            to="/game"
          >
            <h4>Игра</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-links__item"
            activeClassName="selected"
            to="/game-history"
          >
            <h4>История</h4>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
