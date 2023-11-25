import { unstable_cache } from "next/cache";
import { Schedule } from "@/models/Schedule";
import { createConnection } from "@/lib/mongo";

export const getSchedule = unstable_cache(
    async (semester) => {
        await createConnection();

        const schedule = await Schedule.findOne()
            .where("semester")
            .equals(semester)
            .lean()
            .exec();

        delete schedule["_id"];

        return schedule;
    },
    ["schedule"]
);
