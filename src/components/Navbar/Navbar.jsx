import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/doodle_logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-lg sticky top-0 ">
      <div className="flex justify-between container mx-auto">
        <div>
          <Link title="Doodle blogs" className="flex gap-2 ">
            <img src={logo} alt="" />
            <p className="normal-case text-xl">Blogs</p>
          </Link>
        </div>
        <div>
          <NavLink to={"/blogs"}>Blog List</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
