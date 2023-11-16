"use client";

import styled from "styled-components";
import CardDay from "./CardDay";

const CourseCard = ({ course }) => {
    return (
        <CardBackground>
            <CardHeader>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseSection>{course.section}</CourseSection>
            </CardHeader>
            <CardBody>
                <CardCalendar>
                    <CardDay day="sat" time={course.times} />
                    <CardDay day="sun" time={course.times} />
                    <CardDay day="mon" time={course.times} />
                    <CardDay day="tue" time={course.times} />
                    <CardDay day="wed" time={course.times} />
                    <CardDay day="thu" time={course.times} />
                </CardCalendar>
                <CourseInfo>
                    <p>{course.teacher}</p>
                    <p>{course.credits}</p>
                    <p>{course.code}</p>
                </CourseInfo>
            </CardBody>
        </CardBackground>
    );
};

const CardBackground = styled.div`
    background-color: #a75050;
    color: white;
    border-radius: 1rem;
    width: 35rem;
    overflow: hidden;
`;
const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: pink;
    height: 7rem;
`;

const CourseTitle = styled.h1`
    background-color: red;
    display: flex;
    align-items: center;
    text-align: left;
    padding-inline: 1.5rem;
    height: 100%;
    width: 28rem;
    font-size: 1.7rem;
`;
const CourseSection = styled.h1`
    background-color: rgb(77, 12, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1.5rem;
    border-radius: 0 1rem 0 1rem;
    height: 100%;
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem;
    align-items: center;
    gap: 1rem;
`;

const CardCalendar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
`;
const CourseInfo = styled.div`
    line-height: 1.5rem;
    text-align: right;
`;

export default CourseCard;
