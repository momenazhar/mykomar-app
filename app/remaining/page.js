import {
    MainContainer,
    CourseHeading,
    CourseTitle,
    CourseCode,
    CourseCredits,
} from "./styles";

export default function RemainingCourse() {
    return (
        <MainContainer>
            <CourseHeading>
                <CourseTitle>
                    Management of Medically Compromised Patients
                </CourseTitle>
                <CourseCode>CPSXXXX</CourseCode>
            </CourseHeading>
            <CourseCredits>3 CH</CourseCredits>
        </MainContainer>
    );
}
