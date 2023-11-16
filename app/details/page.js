"use client";
import React from "react";
import styled from "styled-components";
import Divider from "@/components/utils/Divider";
import FilledLogo from "@/public/logoFilled.png";
import Image from "next/image";

const Details = ({ loggedUser }) => {
    return (
        <>
            <Divider title="Your Information" />
            <InformationContainer>
                <Table>
                    <tr>
                        <TableNameCell>
                            <Name>Full Name</Name>
                        </TableNameCell>
                        <TableValueCell>
                            <Value>loggedUser.fullName</Value>
                        </TableValueCell>
                    </tr>
                    <tr>
                        <TableNameCell>
                            <Name>Student Code</Name>
                        </TableNameCell>
                        <TableValueCell>
                            <Value>loggedUser.code</Value>
                        </TableValueCell>
                    </tr>
                    <tr>
                        <TableNameCell>
                            <Name>Department</Name>
                        </TableNameCell>
                        <TableValueCell>
                            <Value>loggedUser.department</Value>
                        </TableValueCell>
                    </tr>
                    <tr>
                        <TableNameCell>
                            <Name>Date of Birth</Name>
                        </TableNameCell>
                        <TableValueCell>
                            <Value>loggedUser.dob</Value>
                        </TableValueCell>
                    </tr>
                    <tr>
                        <TableNameCell>
                            <Name>Registered on</Name>
                        </TableNameCell>
                        <TableValueCell>
                            <Value>loggedUser.registered</Value>
                        </TableValueCell>
                    </tr>
                </Table>
                <IdCard>
                    <IdCardHeader>
                        <IdCardHeaderTitle>Student ID</IdCardHeaderTitle>
                        <IdCardLogo src={FilledLogo} />
                    </IdCardHeader>
                    <IdCardBody>
                        <IdCardBodyImage />
                        <IdCardBodyInfo>
                            <IdCardBodyHeader>
                                loggedUser.fullName
                            </IdCardBodyHeader>
                            <IdCardBodySubheader>
                                <IdCardBodySubtitle>
                                    loggedUser.code
                                </IdCardBodySubtitle>
                                <IdCardBodySubtitle>
                                    loggedUser.department
                                </IdCardBodySubtitle>
                            </IdCardBodySubheader>
                            <IdCardBodySubtitle>
                                loggedUser.dob
                            </IdCardBodySubtitle>
                        </IdCardBodyInfo>
                    </IdCardBody>
                    <IdCardFooter>
                        <IdCardFooterText>
                            Komar University of Science and Technology
                        </IdCardFooterText>
                    </IdCardFooter>
                </IdCard>
            </InformationContainer>
            <br />
            <Divider title="Account Details" />
            <InformationContainer>
                <Table>
                    <tr>
                        <TableNameCell>
                            <Name>Email Address</Name>
                        </TableNameCell>
                        <TableValueCell>
                            <Value>loggedUser.email</Value>
                        </TableValueCell>
                    </tr>
                    <tr>
                        <TableNameCell>
                            <Name>Phone Number</Name>
                        </TableNameCell>
                        <TableValueCell>
                            <Value>loggedUser.phone</Value>
                        </TableValueCell>
                    </tr>
                    <tr>
                        <TableNameCell>
                            <Name>Account Security</Name>
                        </TableNameCell>
                        <TableValueCell>
                            <Value>Visit Google Security page</Value>
                        </TableValueCell>
                    </tr>
                </Table>
            </InformationContainer>
        </>
    );
};

const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IdCard = styled.div`
    width: 28rem;
    height: 12rem;
    background-color: #ffffff;
    border-radius: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
`;

const IdCardHeader = styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: #3b3dc9;
    display: flex;
    align-items: center;
`;

const IdCardBody = styled.div`
    display: flex;
    padding: 1rem;
    gap: 1rem;
`;

const IdCardFooter = styled.div`
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

const IdCardHeaderTitle = styled.h2`
    color: white;
    font-size: 1.3rem;
    padding-left: 1rem;
`;

const IdCardLogo = styled(Image)`
    width: 4rem;
    height: auto;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
`;

const IdCardBodyImage = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: red;
    border-radius: 1.3rem;
`;

const IdCardBodyInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const IdCardBodyHeader = styled.h2`
    font-size: 1.2rem;
    text-align: left;
`;

const IdCardBodySubtitle = styled.h3`
    font-size: 0.9rem;
`;

const IdCardBodySubheader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const IdCardFooterText = styled.p`
    color: white;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 600;
`;

const Table = styled.table`
    tr {
        height: 2.2rem;
    }
`;

const Name = styled.h2`
    font-weight: 400;
`;

const Value = styled.h2`
    font-weight: 700;
`;

const TableValueCell = styled.td``;

const TableNameCell = styled.td`
    width: 15rem;
`;

export default Details;
