import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DashboardCard from "./DashboardCard";

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
`;

const Filter = styled.div`
  align-text: center;
  width: 250px;
`;
const ContentFeed = styled.div`
  align-text: center;
  width: 550px;
`;

export default Dashboard => {
  const [,] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Content className="content">
      <ContentFeed>
        <h3>Hello, *users name here*</h3>
        <h4>Popular Homes this Week</h4>
        <DashboardCard />
      </ContentFeed>
      <Filter>
        <form>
          <h3>Filter Results</h3>
          <h4>Rooms and Beds</h4>
          <label>Rooms</label> {/*dropdown here*/}
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <br />
          <label>Beds</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <br />
          <label>Bathrooms</label> {/*dropdown here*/}
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <br />
          <h4>Amenities</h4>
          <label>Kitchen</label>
          <input type="checkbox" id="kitchen" />
          <br />
          <label>Heating</label>
          <input type="checkbox" id="heating" />
          <br />
          <label>Air Conditioning</label>
          <input type="checkbox" id="air conditioning" />
          <br />
          <h4>Facilities</h4>
          <label>Pool</label>
          <input type="checkbox" id="pool"></input>
          <br />
          <label>Gym</label>
          <input type="checkbox" id="gym" />
          <br />
          <label>Free Parking</label>
          <input type="checkbox" id="parking" />
          <br />
          <label>Hot Tub</label>
          <input type="checkbox" id="hot tub" />
          <br />
          <h4>Property Type</h4>
          <label>House</label>
          <input type="checkbox" id="house" />
          <br />
          <label>Apartment</label>
          <input type="checkbox" id="apartment" />
          <br />
          <label>Bed and Breakfast</label>
          <input type="checkbox" id="bnb" />
          <br />
        </form>
      </Filter>
    </Content>
  );
};
