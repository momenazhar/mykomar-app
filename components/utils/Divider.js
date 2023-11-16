import React from "react";
import styled from "styled-components";

const Divider = ({ title, children }) => {
    return (
        <TitleContainer>
            <h1>{title}</h1>
            <LineDivider />
            {children}
        </TitleContainer>
    );
};

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
`;

const LineDivider = styled.div`
    flex-grow: 1;
    height: 3px;
    background-color: black;
`;

export default Divider;
