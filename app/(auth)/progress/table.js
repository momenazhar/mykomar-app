"use client";

import { useState, useMemo } from "react";
import { Table as RadixTable } from "@radix-ui/themes";
import styled from "styled-components";

const alphabeticalSort = (a, b) => a.localeCompare(b);
const numericalSort = (a, b) => a - b;

const sortFns = {
    title: (a, b) => alphabeticalSort(a.title, b.title),
    section: (a, b) => alphabeticalSort(a.section, b.section),
    code: (a, b) => alphabeticalSort(a.code, b.code),
    credits: (a, b) => numericalSort(a.credits, b.credits),
    status: (a, b) => alphabeticalSort(a.status, b.status),
    prefinal: (a, b) => numericalSort(a.prefinal, b.prefinal),
    grade: (a, b) => alphabeticalSort(a.gradeLetter, b.gradeLetter),
};

function useSort() {
    const [sort, setSort] = useState({ key: "title", reverse: false });

    return [
        sort,
        (key) =>
            setSort((prevSort) => ({
                key,
                reverse: prevSort.key === key ? !prevSort.reverse : false,
            })),
    ];
}

export function Table({ classes }) {
    const [sort, setSort] = useSort("title");

    const sortedClasses = useMemo(() => {
        const sortFn = sort.reverse
            ? (a, b) => sortFns[sort.key](b, a)
            : sortFns[sort.key];

        return [...classes].sort(sortFn);
    }, [classes, sort]);

    return (
        <Container>
            <Root>
                <Header>
                    <RadixTable.Row>
                        <ColumnHeaderCell onClick={() => setSort("title")}>
                            <InnerCell>Title</InnerCell>
                        </ColumnHeaderCell>
                        <ColumnHeaderCell onClick={() => setSort("section")}>
                            <InnerCell>Section</InnerCell>
                        </ColumnHeaderCell>
                        <ColumnHeaderCell onClick={() => setSort("code")}>
                            <InnerCell>Code</InnerCell>
                        </ColumnHeaderCell>
                        <ColumnHeaderCell onClick={() => setSort("credits")}>
                            <InnerCell>Credits</InnerCell>
                        </ColumnHeaderCell>
                        <ColumnHeaderCell onClick={() => setSort("status")}>
                            <InnerCell>Status</InnerCell>
                        </ColumnHeaderCell>
                        <ColumnHeaderCell onClick={() => setSort("prefinal")}>
                            <InnerCell>Prefinal</InnerCell>
                        </ColumnHeaderCell>
                        <ColumnHeaderCell onClick={() => setSort("grade")}>
                            <InnerCell>Grade</InnerCell>
                        </ColumnHeaderCell>
                    </RadixTable.Row>
                </Header>
                <Body>
                    {sortedClasses.map((course, index) => (
                        <Row key={`${course.title}+${course.section}+${index}`}>
                            <Cell>
                                <InnerCell>{course.title}</InnerCell>
                            </Cell>
                            <Cell>
                                <InnerCell>{course.section}</InnerCell>
                            </Cell>
                            <Cell>
                                <InnerCell>{course.code}</InnerCell>
                            </Cell>
                            <Cell>
                                <InnerCell>{course.credits}</InnerCell>
                            </Cell>
                            <Cell>
                                <InnerCell>{course.status}</InnerCell>
                            </Cell>
                            <Cell>
                                <InnerCell>{course.prefinal}</InnerCell>
                            </Cell>
                            <Cell>
                                <InnerCell>{course.gradeLetter}</InnerCell>
                            </Cell>
                        </Row>
                    ))}
                </Body>
            </Root>
        </Container>
    );
}

const Root = styled(RadixTable.Root)`
    position: relative;
`;

const Container = styled.div`
    border-radius: 1rem;
    overflow: scroll;
    height: 27rem;
    outline: 1px solid ${({ theme }) => theme.background200};
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Header = styled(RadixTable.Header)`
    background-color: ${({ theme }) => theme.background200};
    height: 3rem;
`;

const Body = styled(RadixTable.Body)`
    background-color: ${({ theme }) => theme.background100};
`;

const Row = styled(RadixTable.Row)`
    height: 2.25rem;
    transition: 0.25s;
    :hover {
        background-color: ${({ theme }) => theme.background200};
    }
`;

const Cell = styled(RadixTable.Cell)`
    color: ${({ theme }) => theme.text950};
`;

const InnerCell = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const ColumnHeaderCell = styled(RadixTable.ColumnHeaderCell)`
    position: sticky;
    top: 0;
    border-bottom: 2px solid ${({ theme }) => theme.background300};
    color: ${({ theme }) => theme.text950};
    transition: 0.25s;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.background300};
        border-bottom: 2px solid ${({ theme }) => theme.background400};
        box-sizing: border-box;
    }
`;
