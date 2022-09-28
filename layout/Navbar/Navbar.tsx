import React from "react";
import { NavbarProps } from "./Navbar.props";

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  return <div className={className}>Navbar</div>;
};

export default Navbar;
