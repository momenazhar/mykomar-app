import { getAuthenticatedStudent } from "@/lib/student";
import {
    Container,
    CardContainer,
    CourseHeading,
    CourseTitle,
    CourseCode,
    CourseCredits,
} from "./styles";
import Divider from "@/components/utils/Divider";

export default async function RemainingCourse() {
    const user = await getAuthenticatedStudent();

    return (
        <>
            <Divider title="Remaining Courses" />
            <Container>
                {user.remainingCourses.map((course, index) => (
                    <CardContainer key={`${index}-${course.code}`}>
                        <CourseHeading>
                            <CourseTitle>{course.title}</CourseTitle>
                            <CourseCode>{course.code}</CourseCode>
                        </CourseHeading>
                        <CourseCredits>{course.credits} CH</CourseCredits>
                    </CardContainer>
                ))}
            </Container>
        </>
    );
}
