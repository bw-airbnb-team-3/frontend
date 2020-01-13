import React, { useEffect } from "react";
import { getListings } from "../components/actions/actionsIndex";
import { connect } from "react-redux";
import styled from "styled-components";
import image1 from "../images/Airbnb1.jpg";

const WrappedDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 200px;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 40px;
  font-weight: 900;
  font-size: 27px;
  text-align: center;
`;

const Container = styled.div`
  width: 450px;
  height: 350px;
  padding-top: 50px;
`;

const Info = styled.div`
  text-align: center;
`;

const Subtitle = styled.h5`
  font-weight: 900;
  font-size: 17px;
`;

const DashboardCard = props => {
  console.log(props);

  useEffect(() => {
    props.getListings();
  }, []);

  console.log(props.state);

  return (
    <div>
      <Title>Popular Homes this Week</Title>
      <WrappedDiv>
        {props.state.map(listing => (
          <Container>
            <Subtitle> {listing.amenities} </Subtitle>
            <ul>
              <li>
                <h3>Bedrooms: {listing.bedrooms}</h3>
              </li>
              <li>
                <h3>Bathrooms: {listing.bathrooms}</h3>
              </li>
            </ul>
            <Info>
              <img src={image1} className="feedImage" alt="photo " />
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

export default connect(mapStateToProps, { getListings })(DashboardCard);
