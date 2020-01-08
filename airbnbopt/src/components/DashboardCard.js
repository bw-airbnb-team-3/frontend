import React, { useState } from "react";

import styled from "styled-components";
import image1 from "../images/Airbnb1.jpg";
import image2 from "../images/Airbnb2.jpg";
import image3 from "../images/Airbnb3.jpg";
import image4 from "../images/Airbnb4.jpg";
import image5 from "../images/Airbnb5.jpg";


const WrappedDiv = styled.div`
display: flex;
flex-wrap: wrap;
margin-left:100px;

`;

const Title = styled.h2`
margin-top: 50px;
`;


const Container = styled.div`
width: 450px;
height: 350px;
padding-top: 100px;
`;

const Info = styled.div`
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
    },
    {
      id: 6,
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
    <div>
      <Title>Popular Homes this Week</Title>
    <WrappedDiv>
      {data.map(({ title, price, guests, rooms, beds, baths, image }) => (
        <Container>
          <h5>{title}</h5>
          <Info>
              <img
                src={image}
                className="feedImage"
                alt="photo by: https://www.airbnb.com/users/show/30303945"
              />
            {" "}
            <br />
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
    </WrappedDiv></div>
  );
};

export default DashboardCard;
