import React from "react";
import styled from "styled-components";

const CardDay = ({ day, time }) => {
    return (
        <Day>
            <Header>
                <TimeDiv>{time.tue.room}</TimeDiv>
                <TimeDiv>{time.tue.start}</TimeDiv>
                <TimeDiv>{time.tue.end}</TimeDiv>
            </Header>
            <Footer>{day.toUpperCase()}</Footer>
        </Day>
    );
};

const Day = styled.div`
    width: 3.5rem;
`;
const Header = styled.div`
    background-color: blue;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4rem;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
`;

const TimeDiv = styled.div``;

const Footer = styled.div`
    background-color: #80a37d;
    width: 100%;
    height: 1.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
`;

export default CardDay;
