import { getSchedule } from "@/lib/schedule";
import { Table } from "./table";
import "@radix-ui/themes/styles.css";
import Divider from "@/components/utils/Divider";

export default async function Schedule() {
    const schedule = await getSchedule("FA2023");

    return (
        <>
            <Divider title="Class Schedule" />
            <Table classes={schedule.classes} />
        </>
    );
}
