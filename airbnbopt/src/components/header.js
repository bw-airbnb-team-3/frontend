import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
background: #fff;
box-shadow: 0 30px 60px 0 rgba(0,0,0,0.2);

`;

const Logo = styled.div`
padding: 0px 0px 0px 50px;
 
`;

const Nav = styled.nav`
display: flex;

`;

const NavLinks = styled.a`
  text-decoration: none;
  color: black;
  padding: 0px 50px 0px 0px;
  font-weight: 500;
`;

export default Header => {
  return (
    <Wrapper>
      <Logo>
        <h2>Logo Here</h2>
      </Logo>
      <Nav>
        <NavLinks href="#">Home</NavLinks>
        <NavLinks href="#">About</NavLinks>
        <NavLinks href="#">Login</NavLinks>
        <NavLinks href="#">Signup</NavLinks>
      </Nav>
    </Wrapper>
  );
};
