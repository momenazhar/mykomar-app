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
    background-color: ${({ theme }) => theme.background200};
    width: 95%;
    height: 1px;
    margin-block: 0.5rem;
`;

export const List = styled.button`
    height: 2.4rem;
    width: 2.4rem;
    background-color: ${({ theme }) => theme.accent500};
    outline: 3px solid ${({ theme }) => theme.accent600};
    outline-offset: -3px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    svg {
        color: ${({ theme }) => theme.light50};
        stroke-width: 1.5px;
    }
`;

export const Enroll = styled.button`
    height: 2.4rem;
    min-width: 2.4rem;
    background-color: ${({ theme }) => theme.secondary500};
    outline: 3px solid ${({ theme }) => theme.secondary600};
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

export const Close = styled.button``;
export const Save = styled.button``;
