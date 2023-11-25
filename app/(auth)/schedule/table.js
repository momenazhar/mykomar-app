"use client";

import { useState, useMemo } from "react";
import { Table as RadixTable } from "@radix-ui/themes";
import {
    TbChevronRight,
    TbChevronLeft,
    TbChevronsLeft,
    TbChevronsRight,
} from "react-icons/tb";
import styled from "styled-components";

const pageSize = 20;

const alphabeticalSort = (a, b) => a.localeCompare(b);

const sortFns = {
    title: (a, b) => alphabeticalSort(a.title, b.title),
    section: (a, b) => alphabeticalSort(a.section, b.section),
    teacher: (a, b) => alphabeticalSort(a.teacher, b.teacher),
    day: (a, b) => alphabeticalSort(a.day, b.day),
    start: (a, b) => alphabeticalSort(a.start, b.start),
    end: (a, b) => alphabeticalSort(a.end, b.end),
    room: (a, b) => alphabeticalSort(a.room, b.room),
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
    const [page, setPage] = useState(0);
    const [sort, setSort] = useSort("title");

    const maxPage = Math.ceil(classes.length / pageSize) - 1;

    const sortedClasses = useMemo(() => {
        const sortFn = sort.reverse
            ? (a, b) => sortFns[sort.key](b, a)
            : sortFns[sort.key];

        return [...classes].sort(sortFn);
    }, [classes, sort]);

    const currentClasses = useMemo(
        () => sortedClasses.slice(page * pageSize, (page + 1) * pageSize),
        [page, sortedClasses]
    );

    return (
        <>
            <Container>
                <RadixTable.Root>
                    <Header>
                        <RadixTable.Row>
                            <ColumnHeaderCell onClick={() => setSort("title")}>
                                <InnerCell>Title</InnerCell>
                            </ColumnHeaderCell>
                            <ColumnHeaderCell
                                onClick={() => setSort("section")}
                            >
                                <InnerCell>Section</InnerCell>
                            </ColumnHeaderCell>
                            <ColumnHeaderCell
                                onClick={() => setSort("teacher")}
                            >
                                <InnerCell>Teacher</InnerCell>
                            </ColumnHeaderCell>
                            <ColumnHeaderCell onClick={() => setSort("day")}>
                                <InnerCell>Day</InnerCell>
                            </ColumnHeaderCell>
                            <ColumnHeaderCell onClick={() => setSort("start")}>
                                <InnerCell>Start</InnerCell>
                            </ColumnHeaderCell>
                            <ColumnHeaderCell onClick={() => setSort("end")}>
                                <InnerCell>End</InnerCell>
                            </ColumnHeaderCell>
                            <ColumnHeaderCell onClick={() => setSort("room")}>
                                <InnerCell>Room</InnerCell>
                            </ColumnHeaderCell>
                        </RadixTable.Row>
                    </Header>
                    <Body>
                        {currentClasses.map((course, index) => (
                            <Row
                                key={`${course.title}+${course.section}+${page}+${index}`}
                            >
                                <Cell>
                                    <InnerCell>{course.title}</InnerCell>
                                </Cell>
                                <Cell>
                                    <InnerCell>{course.section}</InnerCell>
                                </Cell>
                                <Cell>
                                    <InnerCell>{course.teacher}</InnerCell>
                                </Cell>
                                <Cell>
                                    <InnerCell>{course.day}</InnerCell>
                                </Cell>
                                <Cell>
                                    <InnerCell>{course.start}</InnerCell>
                                </Cell>
                                <Cell>
                                    <InnerCell>{course.end}</InnerCell>
                                </Cell>
                                <Cell>
                                    <InnerCell>{course.room}</InnerCell>
                                </Cell>
                            </Row>
                        ))}
                    </Body>
                </RadixTable.Root>
            </Container>
            <PageSwitcherContainer>
                <PageButton onClick={() => setPage(0)}>
                    <TbChevronsLeft />
                </PageButton>
                <PageButton onClick={() => setPage(!page ? maxPage : page - 1)}>
                    <TbChevronLeft />
                </PageButton>
                <PageP>
                    {page + 1} / {maxPage + 1}
                </PageP>
                <PageButton
                    onClick={() => setPage(page === maxPage ? 0 : page + 1)}
                >
                    <TbChevronRight />
                </PageButton>
                <PageButton onClick={() => setPage(maxPage)}>
                    <TbChevronsRight />
                </PageButton>
            </PageSwitcherContainer>
        </>
    );
}

const Container = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    outline: 1px solid ${({ theme }) => theme.background200};
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

const PageSwitcherContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
`;

const PageButton = styled.button`
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.background100};
    border-radius: 0.8rem;
    outline: 1px solid ${({ theme }) => theme.background50};
    outline-offset: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
    svg {
        width: 20px;
        height: 20px;
    }
    :hover {
        background-color: ${({ theme }) => theme.background200};
        outline: 1px solid ${({ theme }) => theme.background100};
    }
`;

const PageP = styled.p`
    outline: 1px solid ${({ theme }) => theme.background50};
    outline-offset: -2px;
    padding: 0.5rem;
    text-align: center;
    width: 5rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.background100};
    user-select: none;
`;
