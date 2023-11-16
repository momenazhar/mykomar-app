"use client";
import React from "react";
import CourseCard from "@/components/utils/CourseCard";
import Divider from "@/components/utils/Divider";
import styled from "styled-components";

export default function Classes() {
    const course = {
        title: "Management of Medically Compromised Patients",
        section: "T1",
        code: "CPSXXXX",
        credits: "3 CH",
        times: {
            tue: {
                start: "12:00",
                end: "14:00",
                room: "B-B06",
            },
            wed: {
                start: "12:00",
                end: "14:00",
                room: "B-B06",
            },
        },
        teacher: "Jacob Koshy",
    };

    return (
        <>
            <Divider title="Current Classes" />
            <CardsContainer>
                <CourseCard course={course} />
                <CourseCard course={course} />
                <CourseCard course={course} />
                <CourseCard course={course} />
            </CardsContainer>
        </>
    );
}

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 1rem;
`;
