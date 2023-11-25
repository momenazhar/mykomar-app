"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const RegisterCourse = ({ course, onSelect, onDeselect }) => {
    const [selected, setSelected] = useState(false);

    const selectHandler = () => {
        if (selected) {
            onDeselect();
        } else {
            onSelect();
        }

        setSelected(!selected);
    };

    return (
        <MainContainer>
            <CourseSelect onClick={selectHandler} selected={selected}>
                {selected ? <FaCheck /> : <></>}
            </CourseSelect>
            <CourseTitle>{course.title}</CourseTitle>
            <CourseCredits>{course.seats}</CourseCredits>
            <CourseCredits>{course.credits} CH</CourseCredits>
            <CourseTime>
                <h3>
                    {course.times.sat ? (
                        `SAT ${course.times.sat.start} - ${course.times.sat.end}`
                    ) : (
                        <></>
                    )}
                </h3>
                <h3>
                    {course.times.sun ? (
                        `SUN ${course.times.sun.start} - ${course.times.sun.end}`
                    ) : (
                        <></>
                    )}
                </h3>
                <h3>
                    {course.times.mon ? (
                        `MON ${course.times.mon.start} - ${course.times.mon.end}`
                    ) : (
                        <></>
                    )}
                </h3>
                <h3>
                    {course.times.tue ? (
                        `TUE ${course.times.tue.start} - ${course.times.tue.end}`
                    ) : (
                        <></>
                    )}
                </h3>
                <h3>
                    {course.times.wed ? (
                        `WED ${course.times.wed.start} - ${course.times.wed.end}`
                    ) : (
                        <></>
                    )}
                </h3>
                <h3>
                    {course.times.thu ? (
                        `THU ${course.times.thu.start} - ${course.times.thu.end}`
                    ) : (
                        <></>
                    )}
                </h3>
            </CourseTime>
            <RoomContainer>
                <CourseRoom>
                    {course.times.sat ? course.times.sat.room : <></>}
                </CourseRoom>
                <CourseRoom>
                    {course.times.sun ? course.times.sun.room : <></>}
                </CourseRoom>
                <CourseRoom>
                    {course.times.mon ? course.times.mon.room : <></>}
                </CourseRoom>
                <CourseRoom>
                    {course.times.tue ? course.times.tue.room : <></>}
                </CourseRoom>
                <CourseRoom>
                    {course.times.wed ? course.times.wed.room : <></>}
                </CourseRoom>
                <CourseRoom>
                    {course.times.thu ? course.times.thu.room : <></>}
                </CourseRoom>
            </RoomContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.background100};
    border-radius: 20px;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.background200};
    transition: 0.2s;
    :hover {
        background-color: ${({ theme }) => theme.background50};
    }
`;

const CourseSelect = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: ${(props) =>
        props.selected
            ? ({ theme }) => theme.primary500
            : ({ theme }) => theme.background200};
    border: solid 4px
        ${(props) =>
            props.selected
                ? ({ theme }) => theme.primary600
                : ({ theme }) => theme.background200};
    border-radius: 10px;
    float: left;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    svg {
        fill: ${({ theme }) => theme.light100};
        height: 10rem;
        transition: 0.2s;
    }
    :hover {
        border-radius: 1rem;
        svg {
            transition: 0.2s;
            transform: scale(130%);
        }
    }
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

const RoomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 8%;
    margin-left: 1rem;
    margin-right: 1rem;
    float: right;
`;

const CourseRoom = styled.h3`
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    float: right;
`;

export default RegisterCourse;
