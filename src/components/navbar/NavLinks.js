import React from "react";
import {NavLink, NavMenu, Separator} from "./NavbarElements";

const NavLinks = () => {
  return (
    <NavMenu>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact-us">Contact us</NavLink>
      <Separator>|</Separator>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/sign-in">Sign In</NavLink>
    </NavMenu>
  );
};

export default NavLinks;
