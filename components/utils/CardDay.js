"use client";

import styled from "styled-components";
import { TbBookOff } from "react-icons/tb";

const CardDay = ({ day, time }) => {
    return (
        <>
            {time ? (
                <AvailableDay>
                    <Header>
                        {time ? (
                            <>
                                <TimeDiv>{time.room}</TimeDiv>
                                <TimeDiv>{time.start}</TimeDiv>
                                <TimeDiv>{time.end}</TimeDiv>
                            </>
                        ) : (
                            <TbBookOff />
                        )}
                    </Header>
                    <Footer>{day.toUpperCase()}</Footer>
                </AvailableDay>
            ) : (
                <UnvailableDay>
                    <Header>
                        {time ? (
                            <>
                                <TimeDiv>{time.room}</TimeDiv>
                                <TimeDiv>{time.start}</TimeDiv>
                                <TimeDiv>{time.end}</TimeDiv>
                            </>
                        ) : (
                            <TbBookOff />
                        )}
                    </Header>
                    <Footer>{day.toUpperCase()}</Footer>
                </UnvailableDay>
            )}{" "}
        </>
    );
};

const AvailableDay = styled.div`
    width: 3.5rem;
    outline: 2px solid ${({ theme }) => theme.background200};
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.background200};
`;

const UnvailableDay = styled.div`
    width: 3.5rem;
    outline: 2px solid ${({ theme }) => theme.background200};
    border-radius: 0.5rem;
    overflow: hidden;
    opacity: 50%;
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
    svg {
        height: 32px;
        width: 32px;
    }
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
