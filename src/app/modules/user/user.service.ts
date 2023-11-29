import {User} from "./user.model";
import {TStudent} from "../student/student.interface";
import config from "../../config";
import {TUser} from "./user.interface";
import Student from "../student/student.model";
import {generateStudentId} from "./user.utils";
import {AcademicSemesterModel} from "../academicSemester/semester.model";
import { TAcademicSemester } from "../academicSemester/semester.interface";

// create student into database
async function createStudentIntoDB(password: string, payload: TStudent) {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, user default password
  userData.password = password || (config.DEFAULT_PASSWORD as string);
  // if(!password) password = config.DEFAULT_PASSWORD as string;

  // set student role
  userData.role = "student";

  // @ts-expect-error
  const admissionSemester:TAcademicSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );
  // set generated student id
  userData.id = await generateStudentId(admissionSemester);
  console.log(userData.id);

  // create a user
  const result = await User.create(userData);

  // create a student
  if (Object.keys(result).length) {
    payload.id = result.id;
    payload.user = result._id; // reference _id

    const newStudent = await Student.create(payload);
    return newStudent;
  }
}

export const __userService = {
  createStudentIntoDB,
};
