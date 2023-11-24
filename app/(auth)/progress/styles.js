"use client";

import styled from "styled-components";

export const StudentProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 10%;
`;

export const Download = styled.button`
    height: 2.4rem;
    width: 2.4rem;
    background-color: ${({ theme }) => theme.primary500};
    outline: 3px solid ${({ theme }) => theme.primary600};
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
    padding: 0;
    svg {
    }
`;
