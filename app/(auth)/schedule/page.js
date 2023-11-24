import { getSchedule } from "@/lib/schedule";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

export default async function Schedule() {
    const schedule = await getSchedule("FA2023");

    return (
        <Table aria-label="Class Schedule - Fall 2023">
            <TableHeader>
                <TableColumn>Title</TableColumn>
                <TableColumn>Section</TableColumn>
                <TableColumn>Teacher</TableColumn>
                <TableColumn>Day</TableColumn>
                <TableColumn>Start</TableColumn>
                <TableColumn>End</TableColumn>
                <TableColumn>Room</TableColumn>
            </TableHeader>
            <TableBody>
                {schedule.classes.map((course, index) => (
                    <TableRow key={index}>
                        <TableCell>{course.title}</TableCell>
                        <TableCell>{course.section}</TableCell>
                        <TableCell>{course.teacher}</TableCell>
                        <TableCell>{course.day}</TableCell>
                        <TableCell>{course.start}</TableCell>
                        <TableCell>{course.end}</TableCell>
                        <TableCell>{course.room}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
