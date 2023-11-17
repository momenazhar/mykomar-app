import { getStudent } from "@/lib/student";
import RegisterCourse from "@/components/utils/RegisterCourse";
import RegisterHeader from "@/components/utils/RegisterHeader";
import Divider from "@/components/utils/Divider";
import { Container, CourseList, CourseDivider, List, Enroll } from "./styles";

export default async function Registration() {
    const user = await getStudent();

    return (
        <>
            <Divider title="Eligible Courses">
                <List />
                <Enroll>Enroll</Enroll>
            </Divider>
            <Container>
                <RegisterHeader />
                <CourseDivider />
                <CourseList>
                    {user.remainingCourses.map((course, index) => (
                        <RegisterCourse
                            key={`${index}-${course.code}`}
                            course={course}
                        />
                    ))}
                </CourseList>
            </Container>
        </>
    );
}
