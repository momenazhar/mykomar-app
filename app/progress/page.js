import { getStudent } from "@/lib/student";
import ProgressBar from "@/components/utils/ProgressBar";
import Divider from "@/components/utils/Divider";
import { StudentProgressContainer, Download } from "./styles";

export default async function Progress() {
    const user = await getStudent();

    return (
        <>
            <Divider title="Student Progress">
                <Download />
                <Download />
            </Divider>
            <StudentProgressContainer>
                <ProgressBar
                    progressValue={{ type: "gpa", value: user.gpa, total: 4 }}
                />
                <ProgressBar
                    progressValue={{
                        type: "courses",
                        value: user.courses,
                        total: user.totalCourses,
                    }}
                />
                <ProgressBar
                    progressValue={{
                        type: "credits",
                        value: user.credits,
                        total: user.totalCredits,
                    }}
                />
            </StudentProgressContainer>
            <Divider title="Class Details" />
        </>
    );
}
