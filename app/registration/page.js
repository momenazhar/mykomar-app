import { getStudent } from "@/lib/student";
import { RegistrationPage } from "./client";

export default async function Registration() {
    const user = await getStudent();
    return <RegistrationPage remainingCourses={user.remainingCourses} />;
}
