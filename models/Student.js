import mongoose, { Schema } from "mongoose";
import { CurrentCourseSchema } from "./CurrentCourse";
import { FinishedCourseSchema } from "./FinishedCourse";
import { RemainingCourseSchema } from "./RemainingCourse";

export const StudentSchema = new Schema({
    firstName: { type: String, requried: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    registered: { type: Date, required: true },
    email: { type: String, required: true, index: true, unique: true },
    phone: { type: String, required: true },
    code: { type: String, required: true },
    department: { type: String, required: true },
    currentCourses: { type: [CurrentCourseSchema], requried: true },
    finishedCourses: { type: [FinishedCourseSchema], required: true },
    remainingCourses: { type: [RemainingCourseSchema], required: true },
});

export let Student =
    global.Student || mongoose.model("students", StudentSchema);
global.Student = Student;
