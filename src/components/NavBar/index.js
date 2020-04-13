import React from "react";
import logo from "../../images/logo.png";
import { NavContainer, Nav } from "./styles";
import { IoIosSearch } from "react-icons/io";

export const NavBar = () => {
  return (
    <NavContainer>
      <Nav>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu-container">
          <a href="#">Past Trials</a>
          <a href="#">How It Works</a>
          <a href="#">Log In/ Sign Up</a>
          <IoIosSearch size="30px" />
        </div>
      </Nav>
    </NavContainer>
  );
};
