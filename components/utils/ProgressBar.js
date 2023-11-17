"use client";

import React from "react";
import styled from "styled-components";

const ProgressBar = ({ progressValue }) => {
    let strokeColor;

    if (progressValue.type === "gpa") {
        strokeColor = "red";
    } else if (progressValue.type === "courses") {
        strokeColor = "blue";
    } else if (progressValue.type === "credits") {
        strokeColor = "yellow";
    } else {
        strokeColor = "#ac2f2f";
    }

    const IndicationStyle = {
        cx: "125",
        cy: "125",
        r: "72px",
        fill: "transparent",
        strokeWidth: "25px",
        stroke: strokeColor,
        strokeLinecap: "round",
        strokeDasharray: "200px",
        strokeDashoffset: "288.4px",
    };

    return (
        <MainContainer>
            <ProgressContainer>
                <InnerTitle>40%</InnerTitle>
                <svg style={IndicatorStyle}>
                    <circle style={IndicatorTrackStyle} />
                    <circle style={IndicationBGStyle} />
                    <circle style={IndicationStyle} />
                </svg>
            </ProgressContainer>
            {progressValue.type === "gpa" ? (
                <h2>Cumulative GPA</h2>
            ) : progressValue.type === "courses" ? (
                <h2>Courses Completion</h2>
            ) : progressValue.type === "credits" ? (
                <h2>Credits Completion</h2>
            ) : (
                <h2>null</h2>
            )}
            {progressValue.type === "gpa" ? (
                <h3>
                    {progressValue.value} out of {progressValue.total}
                </h3>
            ) : progressValue.type === "courses" ? (
                <h3>
                    {progressValue.value} out of {progressValue.total}
                </h3>
            ) : progressValue.type === "credits" ? (
                <h3>
                    {progressValue.value} out of {progressValue.total}
                </h3>
            ) : (
                <h3>null</h3>
            )}
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InnerTitle = styled.h1`
    position: absolute;
`;

const IndicatorStyle = {
    width: "250px",
    height: "250px",
};

const IndicatorTrackStyle = {
    cx: "125",
    cy: "125",
    r: "105px",
    fill: "#b8b8b8",
};

const IndicationBGStyle = {
    cx: "125",
    cy: "125",
    r: "72px",
    fill: "transparent",
    strokeWidth: "25px",
    stroke: "#ebebeb",
    strokeLinecap: "round",
};

// const SVGIndicator = styled.svg`
//     width: 300px;
//     height: 300px;
// `;

// const SVGIndicatorTrack = styled.circle`
//     cx: 150;
//     cy: 150;
//     r: 105px;
//     fill: #b8b8b8;
// `;

// const SVGIndicatorIndicationBG = styled.circle`
//     cx: 150;
//     cy: 150;
//     r: 72px;
//     fill: transparent;
//     stroke-width: 25px;
//     stroke: #ebebeb;
//     stroke-linecap: round;
// `;

// const SVGIndicatorIndication = styled.circle`
//     cx: 150;
//     cy: 150;
//     r: 72px;
//     fill: transparent;
//     stroke-width: 25px;
//     stroke: #07c;
//     stroke-linecap: round;
//     stroke-dasharray: 200px;
//     stroke-dashoffset: 288.4px;
// `;

export default ProgressBar;
