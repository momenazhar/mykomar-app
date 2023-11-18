import { getAuthenticatedStudent } from "@/lib/student";
import { RegistrationPage } from "./client";

export default async function Registration() {
    const user = await getAuthenticatedStudent();
    return <RegistrationPage remainingCourses={user.remainingCourses} />;
}
