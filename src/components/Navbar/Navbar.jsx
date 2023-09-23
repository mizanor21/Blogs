import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/doodle_logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-lg sticky top-0">
      <Link title="Doodle blogs" className="flex gap-2 container mx-auto">
        <img src={logo} alt="" />
        <p className="normal-case text-xl">Blogs</p>
      </Link>
    </div>
  );
};

export default Navbar;
