import React from "react";
import Logo from "@assets/blessly.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[80px] mx-40 mb-10">
      <div className="flex justify-between items-center h-full">
        <Link to="/">
          <img src={Logo} alt="blessly" />
        </Link>
        <div className="flex justify-between w-[300px] font-semibold">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
