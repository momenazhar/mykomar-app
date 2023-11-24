import { Sidebar } from "@/components/Siderbar/Sidebar";
import { SMain } from "../styles";
import { getAuthenticatedStudent } from "@/lib/student";

export default async function Layout({ children }) {
    const user = await getAuthenticatedStudent();

    return (
        <>
            <Sidebar user={user} />
            <SMain>{children}</SMain>
        </>
    );
}
