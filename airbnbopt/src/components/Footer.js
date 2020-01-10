import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
padding-top: 20vh;
`;


export default Footer => {
    return (
      <Wrapper>
          <small>&copy; Copyright 2019 </small>
      </Wrapper>
    );
  };
  
