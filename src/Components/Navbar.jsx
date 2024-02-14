import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span>🍿</span>
        <h1>UsePopCorn</h1>
      </div>
      <SearchBar/>
      <p className="num-results">
        found X movies
      </p>
    </nav>
  );
};

export default Navbar;
