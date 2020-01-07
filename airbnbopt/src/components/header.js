import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(to right, #414345, #232526);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  padding: 0px 0px 0px 50px;
  color: gray;
  font-family: "Bungee Inline", cursive;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLinks = styled.a`
  text-decoration: none;
  color: gray;
  padding: 0px 50px 0px 0px;
  font-weight: 500;
  font-family: "Bungee Inline", cursive;
`;

export default Header => {
  return (
    <Wrapper className="nav-container">
      <Logo>
        <h2>Logo Here</h2>
      </Logo>
      <Nav className="nav-bar">
        <NavLinks href="#">Home</NavLinks>
        <NavLinks href="#">About</NavLinks>
        <NavLinks href="#">Login</NavLinks>
        <NavLinks href="#">Signup</NavLinks>
      </Nav>
    </Wrapper>
  );
};
