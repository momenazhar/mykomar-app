import mongoose, { Schema } from "mongoose";

const ClassSchema = new Schema({
    title: { type: String, required: true },
    section: { type: String, required: true },
    teacher: { type: String, required: true },
    day: { type: String, require: true },
    start: { type: String, require: true },
    end: { type: String, require: true },
    room: { type: String, require: true },
});

export const ScheduleSchema = new Schema({
    semester: { type: String, required: true, index: true, unique: true },
    classes: { type: [ClassSchema], required: true },
});

export let Schedule =
    global.Schedule || mongoose.model("schedules", ScheduleSchema);
global.Schedule = Schedule;
