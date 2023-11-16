"use client";

import React from "react";
import styled from "styled-components";

const ProgressBar = () => {
    return (
        // <div>
        //     <SVGIndicator>
        //         <SVGIndicatorTrack />
        //         <SVGIndicatorIndicationBG />
        //         <SVGIndicatorIndication />
        //     </SVGIndicator>
        // </div>
        <MainContainer>
            <ProgressContainer>
                <InnerTitle>40%</InnerTitle>
                <svg style={IndicatorStyle}>
                    <circle style={IndicatorTrackStyle} />
                    <circle style={IndicationBGStyle} />
                    <circle style={IndicationStyle} />
                </svg>
            </ProgressContainer>
            <h2>Cumulative GPA</h2>
            <h3>4.00 out of 4.00</h3>
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

const IndicationStyle = {
    cx: "125",
    cy: "125",
    r: "72px",
    fill: "transparent",
    strokeWidth: "25px",
    stroke: "#07c",
    strokeLinecap: "round",
    strokeDasharray: "200px",
    strokeDashoffset: "288.4px",
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
