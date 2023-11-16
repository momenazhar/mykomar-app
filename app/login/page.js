"use client";
import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
import styled from "styled-components";
import background from "@/public/background.jpg";

const Login = ({ setLoggedUser }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Check if the entered data matches any user in the User
        const matchingUser = users.find(
            (user) =>
                user.email === formData.email &&
                user.password === formData.password
        );

        if (matchingUser) {
            setIsAuthenticated(true);
            // setLoggedUser(matchingUser);
        } else {
            // Clear the form and display an error message
            setFormData({ email: "", password: "" });
            alert("Invalid email or password. Please try again.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            {/* {isAuthenticated ? (
                <Navigate to="/classes" />
            ) : ( */}
            <>
                <Background />
                <Container>
                    <LoginContainer>
                        <Header>Log into your account</Header>
                        <Form onSubmit={handleFormSubmit}>
                            <Input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <br />
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <br />
                            <Button type="submit">Login</Button>
                        </Form>
                    </LoginContainer>
                </Container>
            </>
            {/* )} */}
        </>
    );
};

const Container = styled.div`
    z-index: 1;
    height: 100vh;
    width: 100%;
    display: flex;
`;

const LoginContainer = styled.div`
    background-color: #0000007f;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    backdrop-filter: blur(15px);
    box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.7);
`;

const Header = styled.h1`
    color: white;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    height: 2.5rem;
    background-color: white;
    border-radius: 0.5rem;
`;

const Button = styled.button`
    text-align: center;
    color: white;
    background-color: #3a3af0;
    height: 2rem;
`;

const Background = styled.div`
    position: fixed;
    background-image: url(${background.src});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1.1);
    z-index: -1;
`;

export default Login;
