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
                    <CardDay day="sat" time={course.times.sat} />
                    <CardDay day="sun" time={course.times.sun} />
                    <CardDay day="mon" time={course.times.mon} />
                    <CardDay day="tue" time={course.times.tue} />
                    <CardDay day="wed" time={course.times.wed} />
                    <CardDay day="thu" time={course.times.thu} />
                </CardCalendar>
                <CourseInfo>
                    <p>{course.teacher}</p>
                    <p>{course.credits} CH</p>
                    <p>{course.code}</p>
                </CourseInfo>
            </CardBody>
        </CardBackground>
    );
};

const CardBackground = styled.div`
    background-color: ${({ theme }) => theme.background100};
    color: ${({ theme }) => theme.text950};
    border-radius: 1rem;
    width: 35rem;
    overflow: hidden;
    box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.background200};
`;
const CardHeader = styled.div`
    background-color: ${({ theme }) => theme.primary500};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 7rem;
    border-bottom: 3px solid ${({ theme }) => theme.secondary500};
`;

const CourseTitle = styled.h1`
    color: ${({ theme }) => theme.light50};
    display: flex;
    align-items: center;
    text-align: left;
    padding-inline: 1.5rem;
    height: 100%;
    width: 28rem;
    font-size: 1.7rem;
`;
const CourseSection = styled.h1`
    background-color: ${({ theme }) => theme.primary400};
    color: ${({ theme }) => theme.light50};
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
    font-weight: 700;
`;

export default CourseCard;
