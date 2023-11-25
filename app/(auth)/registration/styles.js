"use client";

import styled from "styled-components";

export const CourseModalList = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`;

export const CourseModal = styled.div``;

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
    background-color: ${({ theme }) => theme.background200};
    width: 95%;
    height: 1px;
    margin-block: 0.5rem;
`;

export const Enroll = styled.button`
    height: 2.4rem;
    min-width: 2.4rem;
    background-color: ${({ theme }) => theme.accent500};
    outline: 3px solid ${({ theme }) => theme.accent600};
    outline-offset: -3px;
    color: ${({ theme }) => theme.light50};
    border-radius: 10px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1rem;
    font-weight: 600;
    cursor: pointer;
`;

export const Close = styled.button`
    font-weight: 573;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
`;
export const Save = styled.button`
    background-color: #68e36c;
    outline: 2px solid #54d658;
    color: white;
    outline-offset: -2px;
    font-weight: 573;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-shadow: 0px 1px 4px #0000009e;
    cursor: pointer;
`;
