import { Schema } from "mongoose";

export const FinishedCourseSchema = new Schema({
    title: { type: String, required: true },
    section: { type: String, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },
    prefinal: { type: Number, required: true },
    gradeLetter: { type: String, required: true },
    gradePoint: { type: Number, required: true },
    passed: { type: Boolean, required: true },
});
