import { unstable_cache } from "next/cache";
import { Student } from "@/models/Student";
import { createConnection } from "@/lib/mongo";

export const getStudent = unstable_cache(async () => {
    await createConnection();

    const student = await Student.findOne()
        .where("email")
        .equals("momen.azharf20@komar.edu.iq")
        .lean()
        .exec();

    delete student["_id"];

    student.fullName = `${student.firstName} ${student.middleName}`;

    let total = 0;
    let credits = 0;

    student.finishedCourses.forEach((course) => {
        total += course.gradePoint * course.credits;
        credits += course.credits;
    });

    student.gpa = credits == 0 ? 0 : +(total / credits).toFixed(2);

    return student;
}, ["student"]);
