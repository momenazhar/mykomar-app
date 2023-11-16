"use client";
import React from "react";
import ProgressBar from "@/components/utils/ProgressBar";
import Divider from "@/components/utils/Divider";
import styled from "styled-components";

export default function Progress() {
    return (
        <>
            <Divider title="Student Progress">
                <Download />
                <Download />
            </Divider>
            <StudentProgressContainer>
                <ProgressBar />
                <ProgressBar />
                <ProgressBar />
            </StudentProgressContainer>
            <br />
            <br />
            <Divider title="Class Details" />
        </>
    );
}

const StudentProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10rem;
`;

const Download = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    background-color: red;
    border-radius: 10px;
`;
