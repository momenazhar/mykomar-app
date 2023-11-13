import { Schema } from "mongoose";
import { CurrentCourseSchema } from "./CurrentCourse";
import { FinishedCourseSchema } from "./FinishedCourse";
import { RemaingingCourseSchema } from "./RemainingCourse";

export const StudentSchema = new Schema({
    firstName: { type: String, requried: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    registered: { type: Date, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, requried: true },
    code: { type: String, required: true },
    department: { type: String, required: true },
    currentCourses: { type: [CurrentCourseSchema], requried: true },
    finishedCourses: { type: [FinishedCourseSchema], required: true },
    remainingCourses: { type: [RemaingingCourseSchema], required: true },
});
