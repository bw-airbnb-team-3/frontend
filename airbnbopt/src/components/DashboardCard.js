import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
`;


const DashboardCard = props => {
    return (
        <div className="">
            <img 
                src={props}
                alt="pictures of Most popular homes in LA"
                ></img>
            <Title>{props}</Title>
        </div>
    )
}

export default DashboardCard;