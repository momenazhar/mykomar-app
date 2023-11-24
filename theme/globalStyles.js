"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background50};
        color: ${({ theme }) => theme.text950};
        a {
            color: ${({ theme }) => theme.text950};
        }
        font-family: 'Inter', sans-serif;
        letter-spacing: .1px;
    }

    input, button {
        all: unset;
    }
`;
