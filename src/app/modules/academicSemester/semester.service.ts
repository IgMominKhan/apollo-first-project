// create a new semester
import {AcademicSemesterModel} from "./semester.model";
import {TAcademicSemester} from "./semester.interface";
import {semesterNameCodeMapper} from "./semester.constant";

// get semesters from DB
async function getSemestersFromDB() {
  const result = await AcademicSemesterModel.find();
  return result;
}

// get semesters from DB
async function getSemesterFromDB(_id) {
  const result = await AcademicSemesterModel.findOne({ _id });
  return result;
}

// create new semeser
async function createSemesterInto(payload: TAcademicSemester) {
  if (payload.code !== semesterNameCodeMapper[payload.name]) {
    throw new Error("Semester name and code doesn't match ");
  }

  return await AcademicSemesterModel.create(payload);
}

// update semester
async function updateSemesterIntoDB(_id, payload: Partial<TAcademicSemester>) {
  if (
    payload.code && payload.name &&
    semesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Semeser name and code doesn't match");
  }

  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id },
    payload,
    { new: true },
  );

  return result;
}

export default { getSemestersFromDB, getSemesterFromDB, createSemesterInto, updateSemesterIntoDB };
