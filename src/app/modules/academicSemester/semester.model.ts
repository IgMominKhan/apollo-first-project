import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./semester.interface";
import { months, semesterCodes, semesterNames } from "./semester.constant";

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: semesterNames,
  },
  year: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    enum: semesterCodes,
    required: true,
  },
  startMonth: {
    type: String,
    enum: months,
  },
  endMonth: {
    type: String,
    enum: months,
  },
});

// logical validation
academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExist = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExist) {
    throw new Error("Semester already exists");
  }
  next();
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema,
);
