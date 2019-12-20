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
  border: solid 2px;
  align-text: center;
  width: 250px;
`;
const ContentFeed = styled.div`
  border: solid 2px;
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
        <h2>Content here</h2>
        <h3>Hello, *users name here*</h3>
        <h4>Popular Homes this Week</h4>
      </ContentFeed>
      <Filter>
        <h3>Filter Results</h3>
        <ul>
          <li>Rooms</li> //dropdown here
          <li>Bathrooms</li> //dropdown here
          <li>Pool</li> //checkbox
        </ul>
      </Filter>
    </Content>
  );
};
