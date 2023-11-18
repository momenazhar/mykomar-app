import { getAuthenticatedStudent } from "@/lib/student";
import CourseCard from "@/components/utils/CourseCard";
import Divider from "@/components/utils/Divider";
import { CardsContainer } from "./styles";

export default async function Classes() {
    const user = await getAuthenticatedStudent();

    return (
        <>
            <Divider title="Current Classes" />
            <CardsContainer>
                {user.currentCourses.map((course, index) => (
                    <CourseCard
                        key={`${index}-${course.code}`}
                        course={course}
                    />
                ))}
            </CardsContainer>
        </>
    );
}
