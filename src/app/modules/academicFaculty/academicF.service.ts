import { TAcademicFaculty } from "./academicF.interface";
import { AcademicFaculty } from "./academicF.model";

// get academic faculties from db
async function getAcademicFsFromDB() {
  return AcademicFaculty.find();
}

// get academic faculty from db
async function getAcademicFFromDB(_id: string) {
  return AcademicFaculty.findOne({ _id });
}

// create academic faculty
async function createAcademicFIntoDB(payload: TAcademicFaculty) {
  return AcademicFaculty.create(payload);
}

// update academic faculty
async function updateAcademicFIntoDB(
  _id: string,
  payload: TAcademicFaculty,
) {
  return AcademicFaculty.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });
}
export default {
  getAcademicFsFromDB,
  getAcademicFFromDB,
  createAcademicFIntoDB,
  updateAcademicFIntoDB,
};
