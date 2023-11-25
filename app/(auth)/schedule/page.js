import { getSchedule } from "@/lib/schedule";
import { Table } from "./table";
import "@radix-ui/themes/styles.css";

export default async function Schedule() {
    const schedule = await getSchedule("FA2023");

    return <Table classes={schedule.classes} />;
}
