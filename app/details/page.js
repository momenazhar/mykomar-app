import Divider from "@/components/utils/Divider";
import FilledLogo from "@/public/logoFilled.png";
import { getStudent } from "@/lib/student";
import {
    InformationContainer,
    Table,
    TableNameCell,
    Name,
    TableValueCell,
    IdCard,
    IdCardBody,
    IdCardBodyHeader,
    IdCardBodyImage,
    IdCardBodyInfo,
    IdCardBodySubheader,
    IdCardBodySubtitle,
    IdCardFooter,
    IdCardFooterText,
    IdCardHeader,
    IdCardHeaderTitle,
    // IdCardLogo,
    Value,
} from "./info";
import Image from "next/image";

// TODO: format date

export default async function Details() {
    const student = await getStudent();

    return (
        <>
            <Divider title="Your Information" />
            <InformationContainer>
                <Table>
                    <tbody>
                        <tr>
                            <TableNameCell>
                                <Name>Full Name</Name>
                            </TableNameCell>
                            <TableValueCell>
                                <Value>{student.fullName}</Value>
                            </TableValueCell>
                        </tr>
                        <tr>
                            <TableNameCell>
                                <Name>Student Code</Name>
                            </TableNameCell>
                            <TableValueCell>
                                <Value>{student.code}</Value>
                            </TableValueCell>
                        </tr>
                        <tr>
                            <TableNameCell>
                                <Name>Department</Name>
                            </TableNameCell>
                            <TableValueCell>
                                <Value>{student.department}</Value>
                            </TableValueCell>
                        </tr>
                        <tr>
                            <TableNameCell>
                                <Name>Date of Birth</Name>
                            </TableNameCell>
                            <TableValueCell>
                                <Value>{student.dob}</Value>
                            </TableValueCell>
                        </tr>
                        <tr>
                            <TableNameCell>
                                <Name>Registered on</Name>
                            </TableNameCell>
                            <TableValueCell>
                                <Value>{student.registered}</Value>
                            </TableValueCell>
                        </tr>
                    </tbody>
                </Table>
                <IdCard>
                    <IdCardHeader>
                        <IdCardHeaderTitle>Student ID</IdCardHeaderTitle>
                        <Image
                            src={FilledLogo}
                            width={64}
                            height={64}
                            style={{
                                position: "absolute",
                                right: "0.5rem",
                                top: "0.5rem",
                            }}
                            alt="KUST Logo"
                        />
                    </IdCardHeader>
                    <IdCardBody>
                        <IdCardBodyImage />
                        <IdCardBodyInfo>
                            <IdCardBodyHeader>
                                {student.fullName}
                            </IdCardBodyHeader>
                            <IdCardBodySubheader>
                                <IdCardBodySubtitle>
                                    {student.code}
                                </IdCardBodySubtitle>
                                <IdCardBodySubtitle>
                                    {student.department}
                                </IdCardBodySubtitle>
                            </IdCardBodySubheader>
                            <IdCardBodySubtitle>
                                {student.dob}
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
                    <tbody>
                        <tr>
                            <TableNameCell>
                                <Name>Email Address</Name>
                            </TableNameCell>
                            <TableValueCell>
                                <Value>{student.email}</Value>
                            </TableValueCell>
                        </tr>
                        <tr>
                            <TableNameCell>
                                <Name>Phone Number</Name>
                            </TableNameCell>
                            <TableValueCell>
                                <Value>{student.phone}</Value>
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
                    </tbody>
                </Table>
            </InformationContainer>
        </>
    );
}