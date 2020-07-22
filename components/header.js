import React from "react";
import SearchBar from "./search_bar";

export default function Header() {
  return (
    <nav className="navigation">
      <div className="header-container">
        <img src="../static/images/logo.png" className="header-logo" />
        <SearchBar />
      </div>
    </nav>
  );
}
