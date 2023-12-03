import { TAcademicDepartment } from "./academicD.interface";
import { AcademicDepartment } from "./academicD.model";

// get all department data
function getDepartmentsFromDB() {
  return AcademicDepartment.find().populate("academicFaculty");
}

// get single department
function getDepartmentFromDB(id: string) {
  return AcademicDepartment.findById(id).populate("academicFaculty");
}

// create AcademicDepartment
function createDepartmentIntoDB(payload: TAcademicDepartment) {
  return AcademicDepartment.create(payload);
}

// update AcademicDepartment
function updateDepartmentIntoDB(
  id: string,
  payload: Partial<TAcademicDepartment>,
) {
  return AcademicDepartment.findByIdAndUpdate(id, payload, { new: true });
}

export default {
  getDepartmentsFromDB,
  createDepartmentIntoDB,
  updateDepartmentIntoDB,
  getDepartmentFromDB,
};
