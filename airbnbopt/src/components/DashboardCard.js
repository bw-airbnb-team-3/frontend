import React from "react";
import styled from "styled-components";
import image1 from "../images/Airbnb1.jpg";

const Container = styled.div`
  height: 200px;
  width: 550px;
  border: solid 2px;
  display: flex;
  justify-content: center;
`;

const ImageCont = styled.div`
  width: 275px;
  align-text: center;
`;

const Image = styled.div`
  height: 180px;
  width: 255px;
`;

const Info = styled.div`
  width: 275px;
`;

const DashboardCard = props => {
  return (
    <div className="">
      {/* <<div>
         <img 
                src={props}
                alt="pictures of Most popular homes in LA"
                ></img>
            <Title>{props}</Title>
        </div>>*/}

      <Container>
        <ImageCont>
          <Image>
            <img
              src={image1}
              className="feedImage"
              alt="photo by: https://www.airbnb.com/users/show/30303945"
            />
          </Image>
        </ImageCont>
        <Info>
          {" "}
          <h5>LA Pool, Privacy and Amazing Views!</h5>
          3 guests
          <br />
          1 bedroom
          <br />
          2 beds
          <br />
          1.5 baths
          <br />
        </Info>
      </Container>
      <Container>
        <ImageCont>
          <Image>
            <img className="feedImage" />
          </Image>
        </ImageCont>
        <Info>house info</Info>
      </Container>
      <Container>
        <ImageCont>
          <Image>
            <img className="feedImage" />
          </Image>
        </ImageCont>
        <Info>house info</Info>
      </Container>
      <Container>
        <ImageCont>
          <Image>
            <img className="feedImage" />
          </Image>
        </ImageCont>
        <Info>house info</Info>
      </Container>
      <Container>
        <ImageCont>
          <div>
            <img className="feedImage" />
          </div>
        </ImageCont>
        <Info>house info</Info>
      </Container>
    </div>
  );
};

export default DashboardCard;
