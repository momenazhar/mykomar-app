import { getAuthenticatedStudent } from "@/lib/student";
import ProgressBar from "@/components/utils/ProgressBar";
import Divider from "@/components/utils/Divider";
import { StudentProgressContainer, Download } from "./styles";
import { HiOutlineDownload } from "react-icons/hi";
import { HiMiniChartPie } from "react-icons/hi2";

export default async function Progress() {
    const user = await getAuthenticatedStudent();

    return (
        <>
            <Divider title="Student Progress">
                <Download>
                    <HiOutlineDownload />
                </Download>
                <Download>
                    <HiMiniChartPie />
                </Download>
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
