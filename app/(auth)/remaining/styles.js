"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CardContainer = styled.div`
    background-color: ${({ theme }) => theme.background100};
    border-radius: 20px;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.background200};
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
    width: 30%;
    text-align: right;
`;
