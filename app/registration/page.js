"use client";
import React from "react";
import RegisterCourse from "@/components/utils/RegisterCourse";
import RegisterHeader from "@/components/utils/RegisterHeader";
import Divider from "@/components/utils/Divider";
import styled from "styled-components";

export default function Registration() {
    return (
        <>
            <Divider title="Eligible Courses">
                <List />
                <Enroll>Enroll</Enroll>
            </Divider>
            <Container>
                <RegisterHeader />
                <CourseDivider />
                <CourseList>
                    <RegisterCourse />
                    <RegisterCourse />
                    <RegisterCourse />
                </CourseList>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CourseList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
`;

const CourseDivider = styled.div`
    background-color: #c5c5c5;
    width: 95%;
    height: 1px;
    margin-block: 0.5rem;
`;

const List = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    background-color: red;
    border-radius: 10px;
`;

const Enroll = styled.div`
    height: 2.5rem;
    background-color: red;
    border-radius: 10px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1rem;
    font-weight: 600;
`;
