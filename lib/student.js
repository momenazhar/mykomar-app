import { unstable_cache } from "next/cache";
import { Student } from "@/models/Student";
import { createConnection } from "@/lib/mongo";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const getStudent = unstable_cache(
    async (email) => {
        await createConnection();

        const student = await Student.findOne()
            .where("email")
            .equals(email)
            .lean()
            .exec();

        delete student["_id"];

        student.halfName = `${student.firstName} ${student.middleName}`;
        student.fullName = `${student.firstName} ${student.middleName} ${student.lastName}`;

        let total = 0;
        let finishedCredits = 0;

        student.finishedCourses.forEach((course) => {
            total += course.gradePoint * course.credits;
            finishedCredits += course.credits;
        });
        student.gpa =
            finishedCredits == 0 ? 0 : +(total / finishedCredits).toFixed(2);

        student.courses = student.finishedCourses.length;
        student.credits = finishedCredits;

        student.dob = student.dob.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });

        student.registered = student.registered.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });

        return student;
    },
    ["student"]
);

export const getAuthenticatedStudent = async () => {
    const session = await auth();
    if (!session) return redirect("/login");

    const student = await getStudent(session.user.email);

    if (!student) return redirect("/login");

    student.avatar = session.user.image;

    return student;
};
