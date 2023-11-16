import { Schema } from "mongoose";

const Time = { start: Number, end: Number, room: String };

export const CurrentCourseSchema = new Schema({
    title: { type: String, required: true },
    section: { type: String, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },
    times: {
        type: {
            saturday: { type: Time, required: false },
            sunday: { type: Time, required: false },
            monday: { type: Time, required: false },
            tuesday: { type: Time, required: false },
            wednesday: { type: Time, required: false },
            thursday: { type: Time, required: false },
        },
        required: true,
    },
    teacher: { type: String, required: true },
});
