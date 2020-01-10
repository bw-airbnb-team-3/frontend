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
padding-left: 15px;

 
`;

const Form = styled.form`
margin-top: 30px;
padding-top: 5px;
margin-left: 15px;
background: #fff;
box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
width: 600px;
height: 950px;

`;

const Title = styled.h2`
text-align: center;
`;


const SubTitles = styled.h3`
text-align: left;
padding-left: 20px;
font-weight: 900;
padding-top: 15px;
`;

const Features = styled.div`
display: flex;
justify-content:flex-end;
padding-right: 100px;
padding-top: 10px;
`;

const Label = styled.label`
padding-right: 10px;
`;


 const Dashboard = (props) => {



  return (
    <Content className="content">
      <ContentFeed>
        <h1>Hello, *users name here*</h1>
      </ContentFeed>

      <Filter>
        <DashboardCard/>
        <Form>
          <Title>Filter</Title>
          <SubTitles>Rooms and Beds</SubTitles>
          <Features>
          <Label>Rooms:</Label> {/*dropdown here*/}
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          </Features>
          <br />
          <Features>
          <Label>Beds:</Label>
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
          </Features>
          <br />
          <Features>
          <Label>Bathrooms:</Label> {/*dropdown here*/}
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          </Features>
          <br />
          <SubTitles>Amenities</SubTitles>
          <Features>
          <Label>Kitchen</Label>
          <input type="checkbox" id="kitchen" />
          </Features>
          <br />
          <Features>
          <Label>Heating</Label>
          <input type="checkbox" id="heating" />
          </Features>
          <br />
          <Features>
          <Label>Air Conditioning</Label>
          <input type="checkbox" id="air conditioning" />
          </Features>
          <br />
          <SubTitles>Facilities</SubTitles>
          <Features>
          <Label>Pool</Label>
          <input type="checkbox" id="pool"></input>
          </Features>
          <br />
          <Features>
          <Label>Gym</Label>
          <input type="checkbox" id="gym" />
          </Features>
          <br />
          <Features>
          <Label>Free Parking</Label>
          <input type="checkbox" id="parking" />
          </Features>
          <br />
          <SubTitles>Property Type</SubTitles>
          <Features>
          <Label>House</Label>
          <input type="checkbox" id="house" />
          </Features>
          <br />
          <Features>
          <Label>Apartment</Label>
          <input type="checkbox" id="apartment" />
          </Features>
          <br />
          <Features>
          <Label>Bed and Breakfast</Label>
          <input type="checkbox" id="bnb" />
          </Features>
          <br />
        </Form>
      </Filter>
    </Content>
  );
};

export default Dashboard;