import React from "react";
import { nav } from "../../data/data";
import { v4 } from "uuid";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="items-center hidden gap-8 lg:flex">
      {nav.map((item) => (
        <li key={v4()}>
          <NavLink className="links" to={item.path}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
