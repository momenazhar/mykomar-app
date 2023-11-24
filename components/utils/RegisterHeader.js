"use client";

import styled from "styled-components";

const RegisterHeader = () => {
    return (
        <MainContainer>
            <CourseSelect />
            <CourseTitle>Course Title</CourseTitle>
            <CourseCredits>Seats</CourseCredits>
            <CourseCredits>Credits</CourseCredits>
            <CourseTime>Time</CourseTime>
            <CourseRoom>Room</CourseRoom>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.background200};
    border-radius: 20px;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.background200};
`;

const CourseSelect = styled.div`
    height: 3rem;
    width: 3rem;
    float: left;
    user-select: none;
`;

const CourseTitle = styled.h2`
    flex: 1;
    margin-left: 1rem;
    float: left;
    font-weight: 500;
`;

const CourseCredits = styled.h2`
    width: 8%;
    text-align: center;
    margin-left: 1rem;
    font-weight: 500;
`;

const CourseTime = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin-left: 1rem;
    font-weight: 500;
`;

const CourseRoom = styled.h2`
    text-align: center;
    width: 8%;
    margin-left: 1rem;
    margin-right: 1rem;
    float: right;
    font-weight: 500;
`;

export default RegisterHeader;
