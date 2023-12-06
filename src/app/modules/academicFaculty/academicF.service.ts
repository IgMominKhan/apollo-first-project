import { TAcademicFaculty } from './academicF.interface';
import { AcademicFaculty } from './academicF.model';

// get academic faculties from db
function getAcademicFsFromDB() {
  return AcademicFaculty.find();
}

// get academic faculty from db
function getAcademicFFromDB(_id: string) {
  return AcademicFaculty.findOne({ _id });
}

// create academic faculty
function createAcademicFIntoDB(payload: TAcademicFaculty) {
  return AcademicFaculty.create(payload);
}

// update academic faculty
function updateAcademicFIntoDB(_id: string, payload: TAcademicFaculty) {
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
