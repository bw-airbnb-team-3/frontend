import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 550px;
  border: solid 2px;
  display: flex;
  justify-content: center;
`;

const DashboardCard = props => {
  return (
    <div className="">
      {/* <img 
                src={props}
                alt="pictures of Most popular homes in LA"
                ></img>
          <Title>{props}</Title>*/}

      <Container>
        <div>img</div>
        <div>house info</div>
      </Container>
      <Container>
        <div>img</div>
        <div>house info</div>
      </Container>
      <Container>
        <div>img</div>
        <div>house info</div>
      </Container>
      <Container>
        <div>img</div>
        <div>house info</div>
      </Container>
      <Container>
        <div>img</div>
        <div>house info</div>
      </Container>
    </div>
  );
};

export default DashboardCard;
