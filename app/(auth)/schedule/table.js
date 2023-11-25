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
            <RadixTable.Root>
                <RadixTable.Header>
                    <RadixTable.Row>
                        <RadixTable.ColumnHeaderCell
                            onClick={() => setSort("title")}
                        >
                            Title
                        </RadixTable.ColumnHeaderCell>
                        <RadixTable.ColumnHeaderCell
                            onClick={() => setSort("section")}
                        >
                            Section
                        </RadixTable.ColumnHeaderCell>
                        <RadixTable.ColumnHeaderCell
                            onClick={() => setSort("section")}
                        >
                            Teacher
                        </RadixTable.ColumnHeaderCell>
                        <RadixTable.ColumnHeaderCell
                            onClick={() => setSort("day")}
                        >
                            Day
                        </RadixTable.ColumnHeaderCell>
                        <RadixTable.ColumnHeaderCell
                            onClick={() => setSort("start")}
                        >
                            Start
                        </RadixTable.ColumnHeaderCell>
                        <RadixTable.ColumnHeaderCell
                            onClick={() => setSort("end")}
                        >
                            End
                        </RadixTable.ColumnHeaderCell>
                        <RadixTable.ColumnHeaderCell
                            onClick={() => setSort("room")}
                        >
                            Room
                        </RadixTable.ColumnHeaderCell>
                    </RadixTable.Row>
                </RadixTable.Header>
                <RadixTable.Body>
                    {currentClasses.map((course, index) => (
                        <RadixTable.Row
                            key={`${course.title}+${course.section}+${page}+${index}`}
                        >
                            <RadixTable.RowHeaderCell>
                                {course.title}
                            </RadixTable.RowHeaderCell>
                            <RadixTable.Cell>{course.section}</RadixTable.Cell>
                            <RadixTable.Cell>{course.teacher}</RadixTable.Cell>
                            <RadixTable.Cell>{course.day}</RadixTable.Cell>
                            <RadixTable.Cell>{course.start}</RadixTable.Cell>
                            <RadixTable.Cell>{course.end}</RadixTable.Cell>
                            <RadixTable.Cell>{course.room}</RadixTable.Cell>
                        </RadixTable.Row>
                    ))}
                </RadixTable.Body>
            </RadixTable.Root>
            <PageSwitcherContainer>
                <button onClick={() => setPage(0)}>
                    <TbChevronsLeft />
                </button>
                <button onClick={() => setPage(!page ? maxPage : page - 1)}>
                    <TbChevronLeft />
                </button>
                <p>
                    {page}/{maxPage}
                </p>
                <button
                    onClick={() => setPage(page === maxPage ? 0 : page + 1)}
                >
                    <TbChevronRight />
                </button>
                <button onClick={() => setPage(maxPage)}>
                    <TbChevronsRight />
                </button>
            </PageSwitcherContainer>
        </>
    );
}

const PageSwitcherContainer = styled.div`
    display: flex;
`;
