import React, { useState, useEffect } from "react";
import axios from "axios";
import { getListings } from "../components/actions/actionsIndex";
import { connect } from "react-redux";
import styled from "styled-components";
import { Container, Row } from "reactstrap";
import image1 from "../images/Airbnb1.jpg";
import image2 from "../images/Airbnb2.jpg";
import image3 from "../images/Airbnb3.jpg";
import image4 from "../images/Airbnb4.jpg";
import image5 from "../images/Airbnb5.jpg";
import SwCard from "./swCard";

const Background = styled.div`
  background-color: gray;
  border: solid 3px black;
`;

export default function StarWars() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map(item => {
          //  console.log(item.name)

          console.log(item.mass);
          return (
           
          );
        })}
      </Row>
    </Container>
  );
}
/* const DashboardCard = props => {
  console.log(props); 

  useEffect(() => {
    props.getListings();
  }, []); */

/*const [data, setData] = useState([
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
  ]);*/

/* console.log(props.state);

  return (
    <div>
      <Title>Popular Homes this Week</Title>
      <WrappedDiv>
        {props.state.map(({ listing }) => (
          <Container>
            <Subtitle>test</Subtitle>
            <Info>
              <img
                src="#"
                className="feedImage"
                alt="photo by: https://www.airbnb.com/users/show/30303945"
              />
            </Info>
          </Container>
        ))}
      </WrappedDiv>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { getListings })(DashboardCard); */
