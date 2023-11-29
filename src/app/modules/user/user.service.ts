import { User } from './user.model';
import { TStudent } from '../student/student.interface';
import config from '../../config';
import { TUser } from './user.interface';
import Student from '../student/student.model';

// create student into database
async function createStudentIntoDB(password: string, studentData: TStudent) {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, user default password
  userData.password = password || (config.DEFAULT_PASSWORD as string);
  // if(!password) password = config.DEFAULT_PASSWORD as string;

  // set student role
  userData.role = 'student';

  // set manually generated id
  userData.id = '2030100017';

  // create a user
  const result = await User.create(userData);

  // create a student
  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id; // reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
}

export const __userService = {
  createStudentIntoDB,
};
