import React from "react";
import { NavLink } from "react-router-dom";

//style for navlink
const style = {
  fontWeight: "bold",
  color: "#FDCA5C",
};
const Header = () => {
  return (
    <div className="flex justify-between p-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800">
      <div className="flex">
        <i className="fas fa-laptop-house h-12 text-2xl font-bold text-white mr-1"></i>
        <h2 className="text-2xl font-bold text-white">IT Shikhon</h2>
      </div>
      <div className="text-2xl font-bold text-white ">
        <NavLink
          className="m-2"
          to="/home"
          activeClassName="selected"
          activeStyle={style}
        >
          Home
        </NavLink>
        <NavLink
          className="m-2"
          to="/services"
          activeClassName="selected"
          activeStyle={style}
        >
          Services
        </NavLink>
        <NavLink
          className="m-2"
          to="/about"
          activeClassName="selected"
          activeStyle={style}
        >
          About
        </NavLink>
        <NavLink
          className="m-2"
          to="/teach"
          activeClassName="selected"
          activeStyle={style}
        >
          Teach
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
