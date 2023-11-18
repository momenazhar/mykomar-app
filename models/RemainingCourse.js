import { Schema } from "mongoose";

const Time = { start: Number, end: Number, room: String };

export const RemainingCourseSchema = new Schema({
    title: { type: String, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },
    times: {
        type: {
            sat: { type: Time, required: false },
            sun: { type: Time, required: false },
            mon: { type: Time, required: false },
            tue: { type: Time, required: false },
            wed: { type: Time, required: false },
            thu: { type: Time, required: false },
        },
        required: true,
    },
});
