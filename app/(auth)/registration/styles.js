"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CourseList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
`;

export const CourseDivider = styled.div`
    background-color: #c5c5c5;
    width: 95%;
    height: 1px;
    margin-block: 0.5rem;
`;

export const List = styled.div`
    height: 2.4rem;
    width: 2.4rem;
    background-color: red;
    border-radius: 10px;
`;

export const Enroll = styled.button`
    height: 2.4rem;
    background-color: red;
    border-radius: 10px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1rem;
    font-weight: 600;
    cursor: pointer;
`;

export const Close = styled.button``;
export const Save = styled.button``;
