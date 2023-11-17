"use client";

import styled from "styled-components";
import background from "@/public/background.jpg";

export const LogoStyle = {
    filter: "drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.9))",
    marginBottom: "1rem",
};

export const Container = styled.div`
    z-index: 1;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const LoginContainer = styled.div`
    background-color: #0000007f;
    width: 35%;
    height: 102%;
    display: flex;
    border: 5px solid rgba(0, 0, 0, 0.3);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    backdrop-filter: blur(15px);
    box-shadow: 10px 0px 25px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.h1`
    color: white;
    text-align: center;
    user-select: none;
`;

export const Subtitle = styled.h2`
    color: white;
    text-align: center;
    font-weight: 400;
    user-select: none;
`;

export const Button = styled.button`
    background-color: white;
    height: 1.3rem;
    padding: 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    border-radius: 12px;
    border: 2px solid #eeeeee;
    margin: 1rem;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
    :hover {
        transform: translateY(-4px);
        background-color: #d8d8d8;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
    }
`;

export const Icon = styled.div`
    height: 20px;
    margin-right: 12px;
    min-width: 20px;
    width: 20px;
`;

export const Background = styled.div`
    position: fixed;
    background-image: url(${background.src});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: blur(1px);
    transform: scale(1.1);
    z-index: -1;
`;
