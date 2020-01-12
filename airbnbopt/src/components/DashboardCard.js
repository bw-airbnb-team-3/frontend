import React, { useState, useEffect } from "react";
import { getListings } from '../components/actions/actionsIndex';
import { connect } from 'react-redux';
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
margin-top: 40px;
font-weight: 900;
font-size: 27px
`;


const Container = styled.div`
width: 450px;
height: 350px;
padding-top: 50px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin: 2.5%;
`;

const Info = styled.div`
`;

const Subtitle = styled.h5`
font-weight: 900;
font-size: 24px;

`;



const DashboardCard = props => {

  console.log(props)

  useEffect(() => {
    props.getListings();
  }, [])

  

  console.log(props.state);

  return (
    <div>
      <Title>Popular Homes this Week</Title>
    <WrappedDiv>
      {props.state.map(( listing ) => (
        <Container>
          <Subtitle> {listing.amenities}  </Subtitle>
          <ul>
            <li>
             <h3>Bedrooms: {listing.bedrooms}</h3>
            </li>
            <li>
             <h3>Bathrooms: {listing.bathrooms}</h3>
            </li>

          </ul>
          <Info>
              <img
                src="#"
                className="feedImage"
                alt="photo by: https://www.airbnb.com/users/show/30303945"
              />

          </Info>
        </Container>
      ))}
    </WrappedDiv></div>
  );
  
};

const mapStateToProps = (state) => {
  return {
     state
  }
};

export default connect(mapStateToProps, {getListings})(DashboardCard);
