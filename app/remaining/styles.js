"use client";

import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #a0a0a0;
    border-radius: 20px;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;
`;

export const CourseHeading = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CourseTitle = styled.h2``;

export const CourseCode = styled.h3`
    font-size: 1rem;
`;

export const CourseCredits = styled.h2`
    width: 8%;
    text-align: right;
`;
