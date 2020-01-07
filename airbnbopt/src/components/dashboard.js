import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DashboardCard from "./DashboardCard";

const Content = styled.div`

`;

const Filter = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const ContentFeed = styled.div`
 
`;

const Form = styled.form`
margin-top: 40px;
padding-top: 10px;
background-color: #FFDAB9;
width: 600px;
height: 950px;

`;

const SubTitles = styled.h3`
text-align: left;
padding-left: 15px;
font-weight: 900;
padding-top: 50px;
`;

const Label = styled.label`
display: flex;
justify-content:flex-end;
padding-right: 100px;
padding-top: 20px;
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
        <h1>Hello, *users name here*</h1>
      </ContentFeed>

      <Filter>
        <DashboardCard/>
        <Form>
          <h2>Filter</h2>
          <SubTitles>Rooms and Beds</SubTitles>
          <Label>
          <label>Rooms </label> {/*dropdown here*/}
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          </Label>
          <br />
          <Label>
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
          </select>
          </Label>
          <br />
          <Label>
          <label>Bathrooms</label> {/*dropdown here*/}
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          </Label>
          <br />
          <SubTitles>Amenities</SubTitles>
          <label>Kitchen</label>
          <input type="checkbox" id="kitchen" />
          <br />
          <label>Heating</label>
          <input type="checkbox" id="heating" />
          <br />
          <label>Air Conditioning</label>
          <input type="checkbox" id="air conditioning" />
          <br />
          <SubTitles>Facilities</SubTitles>
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
          <SubTitles>Property Type</SubTitles>
          <label>House</label>
          <input type="checkbox" id="house" />
          <br />
          <label>Apartment</label>
          <input type="checkbox" id="apartment" />
          <br />
          <label>Bed and Breakfast</label>
          <input type="checkbox" id="bnb" />
          <br />
        </Form>
      </Filter>
    </Content>
  );
};
