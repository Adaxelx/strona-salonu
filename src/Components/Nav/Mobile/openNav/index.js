import React from "react";
import "Root/MainStyle.sass";
import { NavLink } from "react-router-dom";

const openedNav = ({ active, handleClick, match }) => {
  console.log(match);
  return (
    <nav className={active ? "active openedNav" : "openedNav"}>
      <section className="navList">
        <NavLink onClick={handleClick} className="navList__link" to="/">
          <span>Start</span>
          <span>00</span>
        </NavLink>
        <NavLink to="/gallery" className="navList__link" onClick={handleClick}>
          <span>Galeria</span>
          <span>01</span>
        </NavLink>
      </section>
    </nav>
  );
};

export default openedNav;
