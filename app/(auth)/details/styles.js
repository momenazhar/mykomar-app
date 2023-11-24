"use client";

import styled from "styled-components";

export const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IdCard = styled.div`
    width: 28rem;
    height: 12rem;
    background-color: #ffffff;
    border-radius: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 3px 10px 1px ${({ theme }) => theme.background200};
`;

export const IdCardHeader = styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: #3b3dc9;
    display: flex;
    align-items: center;
`;

export const IdCardBody = styled.div`
    display: flex;
    padding: 1rem;
    gap: 1rem;
    color: ${({ theme }) => theme.dark200};
`;

export const IdCardFooter = styled.div`
    width: 100%;
    height: 1.5rem;
    background-color: #e22b43;
    box-shadow: 0px -4px 0px 0px rgb(255, 217, 17);
    -webkit-box-shadow: 0px -4px 0px 0px rgb(255, 217, 17);
    -moz-box-shadow: 0px -4px 0px 0px rgb(255, 217, 17);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IdCardHeaderTitle = styled.h2`
    color: white;
    font-size: 1.3rem;
    padding-left: 1rem;
`;

export const IdCardBodyInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const IdCardBodyHeader = styled.h2`
    font-size: 1.2rem;
    text-align: left;
`;

export const IdCardBodySubtitle = styled.h3`
    font-size: 0.9rem;
`;

export const IdCardBodySubheader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const IdCardFooterText = styled.p`
    color: white;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 600;
`;

export const Table = styled.table`
    tr {
        height: 2.2rem;
    }
`;

export const Name = styled.h2`
    font-weight: 400;
`;

export const Value = styled.h2`
    font-weight: 700;
    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        svg {
            height: 20px;
            width: 20px;
            stroke-width: 0.5px;
        }
    }
`;

export const TableValueCell = styled.td``;

export const TableNameCell = styled.td`
    width: 15rem;
`;
