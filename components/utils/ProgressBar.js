"use client";

import styled from "styled-components";

const ProgressBar = ({ progressValue }) => {
    let strokeColor;

    if (progressValue.type === "gpa") {
        strokeColor = "#3d36c9";
    } else if (progressValue.type === "courses") {
        strokeColor = "#f9b006";
    } else if (progressValue.type === "credits") {
        strokeColor = "#eb1f14";
    } else {
        strokeColor = "#1d1d1d";
    }

    const percent = progressValue.value / progressValue.total;

    const center = 250 / 2;
    const trackWidth = 25;
    const radius = center - 2 * trackWidth - 3;
    const dashArray = 2 * Math.PI * radius;
    const dashOffset = dashArray * (1 - percent);

    return (
        <MainContainer>
            <ProgressContainer>
                <InnerTitle>{(percent * 100).toFixed(0)}%</InnerTitle>
                <SVGIndicator>
                    <SVGIndicatorTrack cx={center} cy={center} r={105} />
                    <SVGIndicatorIndicationBG cx={center} cy={center} r={72} />
                    <SVGIndicatorIndication
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={trackWidth}
                        stroke={strokeColor}
                        filter={`drop-shadow(0px 2px 5px ${strokeColor}80)`}
                    />
                </SVGIndicator>
            </ProgressContainer>
            <h2>
                {progressValue.type === "gpa"
                    ? "Cumulative GPA"
                    : progressValue.type === "courses"
                    ? "Courses Completion"
                    : progressValue.type === "credits"
                    ? "Credits Completion"
                    : ""}
            </h2>
            <h3>
                {progressValue.value} out of {progressValue.total}
            </h3>
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

const SVGIndicator = styled.svg`
    width: 250px;
    height: 250px;
    transform: rotate(90);
`;

const SVGIndicatorTrack = styled.circle`
    fill: ${({ theme }) => theme.background100};
`;

const SVGIndicatorIndicationBG = styled.circle`
    fill: transparent;
    stroke-width: 25px;
    stroke: ${({ theme }) => theme.background200};
    stroke-linecap: round;
`;

const SVGIndicatorIndication = styled.circle`
    fill: transparent;
    stroke-linecap: round;
`;

export default ProgressBar;
