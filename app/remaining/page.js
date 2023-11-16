"use client";
import React from "react";
import styled from "styled-components";

const RemainingCourse = () => {
    return (
        <MainContainer>
            <CourseHeading>
                <CourseTitle>
                    Management of Medically Compromised Patients
                </CourseTitle>
                <CourseCode>CPSXXXX</CourseCode>
            </CourseHeading>
            <CourseCredits>3 CH</CourseCredits>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    background-color: #a0a0a0;
    border-radius: 20px;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;
`;

const CourseHeading = styled.div`
    display: flex;
    flex-direction: column;
`;

const CourseTitle = styled.h2``;

const CourseCode = styled.h3`
    font-size: 1rem;
`;

const CourseCredits = styled.h2`
    width: 8%;
    text-align: right;
`;

export default RemainingCourse;
