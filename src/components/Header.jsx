import React from "react";
import HeaderLogo from "../images/Mr._Robot_Logo.svg.png";

const Header = () => {
  return (
    <header>
      <img
        className="logo-img"
        src={HeaderLogo}
        alt="Logo that says Mr. Robot"
      />
      <h1 className="title">Memory Game</h1>
    </header>
  );
};

export default Header;
