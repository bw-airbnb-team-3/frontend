import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(to right, #414345, #232526);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Logo = styled.div`
  padding: 0px 0px 0px 50px;
  color: gray;
  font-family: "Bungee Inline", cursive;
  @media (max-width: 720px) {
    padding: 0px 0px 0px 20px;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  @media (max-width: 720px) {
    font-size: 50px;
  }
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
  @media (max-width: 720px) {
    padding: 0px 10px 0px 0px;
  }
`;

export default Header => {
  return (
    <Wrapper className="nav-container">
      <Logo>
        <Title>LA Opt</Title>
      </Logo>
      <Nav className="nav-bar">
        <NavLinks href="https://la-opt.netlify.com/">Home</NavLinks>
        <NavLinks href="https://la-opt.netlify.com/about.html">About</NavLinks>
        <NavLinks href="/protected">Dashboard</NavLinks>
        <NavLinks href="#">Log Out</NavLinks>
      </Nav>
    </Wrapper>
  );
};
