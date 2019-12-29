import React, { useState } from "react";

import styled from "styled-components";
import image1 from "../images/Airbnb1.jpg";
import image2 from "../images/Airbnb2.jpg";
import image3 from "../images/Airbnb3.jpg";
import image4 from "../images/Airbnb4.jpg";
import image5 from "../images/Airbnb5.jpg";

const Container = styled.div`
  height: 200px;
  width: 550px;
  border-bottom: teal dashed 2px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
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
  const [data, setData] = useState([
    {
      id: 1,
      title: "LA Pool, Privacy and Amazing Views!",
      guests: "3",
      rooms: "1",
      beds: "1",
      baths: "1.5",
      image: image1
    },
    {
      id: 2,
      title: "Burbank near Studios - quiet, safe neighborhood",
      guests: "2",
      rooms: "1",
      beds: "1",
      baths: "1.5",
      image: image2
    },
    {
      id: 3,
      title: "Charming Guests Suite in Hancock Park, 2BD,Pool",
      guests: "4",
      rooms: "2",
      beds: "3",
      baths: "1",
      image: image3
    },
    {
      id: 4,
      title: "Stylish Hollywood Loft with Views",
      guests: "3",
      rooms: "1",
      beds: "1",
      baths: "1",
      image: image4
    },
    {
      id: 5,
      title: "Downtown LA Luxury Apartment w/ BEST LOCATION DTLA",
      guests: "3",
      rooms: "1",
      beds: "2",
      baths: "1",
      image: image5
    }
  ]);

  return (
    <div className="">
      {data.map(({ title, guests, rooms, beds, baths, image }) => (
        <Container>
          <ImageCont>
            <Image>
              <img
                src={image}
                className="feedImage"
                alt="photo by: https://www.airbnb.com/users/show/30303945"
              />
            </Image>
          </ImageCont>
          <Info>
            {" "}
            <h5>{title}</h5>
            {guests} guests
            <br />
            {rooms} bedroom
            <br />
            {beds} beds
            <br />
            {baths} baths
            <br />
          </Info>
        </Container>
      ))}

      {/*<Container>
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
        <Info>
          <h5>Stylish Hollywood Loft with Views</h5>
          3 Guests
          <br />
          1 Bedroom
          <br />
          1 bed
          <br />
          1 bath
          <br />
        </Info>
      </Container>
      <Container>
        <ImageCont>
          <div>
            <img src={image5} className="feedImage" />
          </div>
        </ImageCont>
        <Info>
          <h5>Downtown LA Luxury Apartment w/ BEST LOCATION DTLA</h5>
          3 guests
          <br />
          Studio
          <br />
          2 beds
          <br />
          1 bath
          <br />
        </Info>
      </Container>*/}
    </div>
  );
};

export default DashboardCard;
