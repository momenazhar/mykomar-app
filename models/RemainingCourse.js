import { Schema } from "mongoose";

export const RemainingCourseSchema = new Schema({
    title: { type: String, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },
});
