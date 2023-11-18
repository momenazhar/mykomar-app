import mongoose, { Schema } from "mongoose";

const Time = { day: String, start: Number, end: Number, room: String };

export const ScheduleSchema = new Schema({
    title: { type: String, required: true },
    section: { type: String, required: true },
    teacher: { type: String, required: true },
    times: { type: Time, required: true },
});

export let Schedule =
    global.Schedule || mongoose.model("schedule", ScheduleSchema);
global.Schedule = Schedule;
