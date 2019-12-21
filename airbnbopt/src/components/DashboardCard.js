import React from "react";
import styled from "styled-components";
import image1 from "../images/Airbnb1.jpg";
import image2 from "../images/Airbnb2.jpg";
import image3 from "../images/Airbnb3.jpg";
import image4 from "../images/Airbnb4.jpg";
import image5 from "../images/Airbnb5.jpg";

const Container = styled.div`
  height: 200px;
  width: 550px;
  border: solid 1px;
  display: flex;
  justify-content: center;
`;

const ImageCont = styled.div`
  width: 275px;
  align-text: center;
`;

const Image = styled.div`
  height: 220px;
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
            <img src={image2} className="feedImage" />
          </Image>
        </ImageCont>
        <Info>
          <h5>Burbank near Studios - quiet, safe neighborhood</h5>
          2 Guests
          <br />
          1 Bedroom
          <br />
          1 bed
          <br />
          1.5 Shared baths
          <br />
        </Info>
      </Container>
      <Container>
        <ImageCont>
          <Image>
            <img src={image3} className="feedImage" />
          </Image>
        </ImageCont>
        <Info>
          {" "}
          <h5>Charming Guests Suite in Hancock Park, 2BD,Pool</h5>
          4 Guests
          <br />
          2 Bedrooms
          <br />
          3 beds
          <br />
          1 private bath
          <br />
        </Info>
      </Container>
      <Container>
        <ImageCont>
          <Image>
            <img src={image4} className="feedImage" />
          </Image>
        </ImageCont>
        <Info>house info</Info>
      </Container>
      <Container>
        <ImageCont>
          <div>
            <img src={image5} className="feedImage" />
          </div>
        </ImageCont>
        <Info>house info</Info>
      </Container>
    </div>
  );
};

export default DashboardCard;
