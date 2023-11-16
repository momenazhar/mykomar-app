"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        a {
            color: ${({ theme }) => theme.text};
        }
        font-family: 'Inter', sans-serif;
        letter-spacing: .1px;
    }

    input, button {
        all: unset;
    }
`;
