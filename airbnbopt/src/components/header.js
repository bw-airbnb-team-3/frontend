import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const NavLinks = styled.a`
  text-decoration: none;
  color: black;
  padding-left: 10px;
  padding_right: 10px;
`;

export default Header => {
  return (
    <div>
      <Logo>
        <h2>Logo Here</h2>
      </Logo>
      <Nav>
        <NavLinks href="#">Home</NavLinks>
        <NavLinks href="#">About</NavLinks>
        <NavLinks href="#">Login/Signup</NavLinks>
      </Nav>
    </div>
  );
};
