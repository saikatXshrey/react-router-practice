import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink exact to="/">
        About Us
      </NavLink>
      <br />
      <NavLink exact to="/contact">
        Contact Us
      </NavLink>
      <br />
      <NavLink exact to="/service">
        Service
      </NavLink>
    </>
  );
};

export default Menu;
