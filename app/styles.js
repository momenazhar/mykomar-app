"use client";

import styled from "styled-components";

import { v } from "./../theme/variables";

export const SLayout = styled.div`
    display: flex;
`;

export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 4);
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const SMainLogin = styled.main`
    width: 100%;
`;
