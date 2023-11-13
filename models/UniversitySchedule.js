import { Schema } from "mongoose";

export const UniversityScheduleSchema = new Schema({
    title: { type: String, required: true },
    section: { type: String, required: true },
    teacher: { type: String, required: true },
    room: { type: String, required: true },
    day: { type: String, required: true },
    start: { type: Number, required: true },
    end: { type: Number, required: true },
});
