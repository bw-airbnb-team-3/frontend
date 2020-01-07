import React, { useState } from "react";

import styled from "styled-components";
import image1 from "../images/Airbnb1.jpg";
import image2 from "../images/Airbnb2.jpg";
import image3 from "../images/Airbnb3.jpg";
import image4 from "../images/Airbnb4.jpg";
import image5 from "../images/Airbnb5.jpg";

const Container = styled.div`
  height: 220px;
  width: 550px;
  border-bottom: teal dashed 2px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

const ImageCont = styled.div`
  width: 275px;
  text-align: center;
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
      price: "$150 / night",
      guests: "3",
      rooms: "1",
      beds: "1",
      baths: "1.5",
      image: image1
    },
    {
      id: 2,
      title: "Burbank near Studios - quiet, safe neighborhood",
      price: "$64 / night",
      guests: "2",
      rooms: "1",
      beds: "1",
      baths: "1.5",
      image: image2
    },
    {
      id: 3,
      title: "Charming Guests Suite in Hancock Park, 2BD,Pool",
      price: "$80 / night",
      guests: "4",
      rooms: "2",
      beds: "3",
      baths: "1",
      image: image3
    },
    {
      id: 4,
      title: "Stylish Hollywood Loft with Views",
      price: "$100 / night",
      guests: "3",
      rooms: "1",
      beds: "1",
      baths: "1",
      image: image4
    },
    {
      id: 5,
      title: "Downtown LA Luxury Apartment w/ BEST LOCATION DTLA",
      price: "$89 / night",
      guests: "3",
      rooms: "1",
      beds: "2",
      baths: "1",
      image: image5
    }
  ]);

  return (
    <div className="">
      {data.map(({ title, price, guests, rooms, beds, baths, image }) => (
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
            {price}
            <br />
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
    </div>
  );
};

export default DashboardCard;
