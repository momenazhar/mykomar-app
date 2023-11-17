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
                <ProgressBar progressType="gpa" />
                <ProgressBar progressType="courses" />
                <ProgressBar progressType="credits" />
            </StudentProgressContainer>
            <Divider title="Class Details" />
        </>
    );
}
