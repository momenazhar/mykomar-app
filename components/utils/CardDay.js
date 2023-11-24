"use client";

import styled from "styled-components";

const CardDay = ({ day, time }) => {
    return (
        <Day>
            <Header>
                {time ? (
                    <>
                        <TimeDiv>{time.room}</TimeDiv>
                        <TimeDiv>{time.start}</TimeDiv>
                        <TimeDiv>{time.end}</TimeDiv>
                    </>
                ) : (
                    <p>NULL</p>
                )}
            </Header>
            <Footer>{day.toUpperCase()}</Footer>
        </Day>
    );
};

const Day = styled.div`
    width: 3.5rem;
    outline: 2px solid ${({ theme }) => theme.background200};
    border-radius: 0.5rem;
    overflow: hidden;
`;
const Header = styled.div`
    background-color: ${({ theme }) => theme.background200};
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
    background-color: ${({ theme }) => theme.accent400};
    color: ${({ theme }) => theme.light50};
    width: 100%;
    height: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 700;
`;

export default CardDay;
