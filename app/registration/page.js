import RegisterCourse from "@/components/utils/RegisterCourse";
import RegisterHeader from "@/components/utils/RegisterHeader";
import Divider from "@/components/utils/Divider";
import { Container, CourseList, CourseDivider, List, Enroll } from "./styles";

export default function Registration() {
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
                    <RegisterCourse />
                    <RegisterCourse />
                    <RegisterCourse />
                </CourseList>
            </Container>
        </>
    );
}
