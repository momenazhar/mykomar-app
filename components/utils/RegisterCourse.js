"use client";
import React, { useState } from "react";
import styled from "styled-components";

const RegisterCourse = ({ course }) => {
    const [selected, setSelected] = useState(false);
    const selectHandler = () => {
        setSelected(!selected);
    };

    return (
        <MainContainer>
            <CourseSelect onClick={selectHandler} selected={selected}>
                {selected ? "On" : "Off"}
            </CourseSelect>
            <CourseTitle>{course.title}</CourseTitle>
            <CourseCredits>40</CourseCredits>
            <CourseCredits>{course.credits} CH</CourseCredits>
            <CourseTime>
                <h3>MON 10:00 - 12:00</h3>
                <h3>WED 10:00 - 12:00</h3>
            </CourseTime>
            <CourseRoom>B-B06</CourseRoom>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    background-color: #a0a0a0;
    border-radius: 20px;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
`;

const CourseSelect = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: ${(props) => (props.selected ? "#39369F" : "#dddddd")};
    border: solid 4px #7a7a7a;
    border-radius: 10px;
    float: left;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CourseTitle = styled.h2`
    flex: 1;
    margin-left: 1rem;
    float: left;
`;

const CourseCredits = styled.h2`
    width: 8%;
    text-align: center;
    margin-left: 1rem;
`;

const CourseTime = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin-left: 1rem;
`;

const CourseRoom = styled.h2`
    text-align: center;
    width: 8%;
    margin-left: 1rem;
    margin-right: 1rem;
    float: right;
`;

export default RegisterCourse;
