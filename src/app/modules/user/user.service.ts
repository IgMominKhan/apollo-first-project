import { User } from './user.model';
import { TStudent } from '../student/student.interface';
import config from '../../config';
import { TUser } from './user.interface';
import Student from '../student/student.model';
import { generateStudentId } from './user.utils';
import { AcademicSemesterModel } from '../academicSemester/semester.model';
import { TAcademicSemester } from '../academicSemester/semester.interface';
import mongoose from 'mongoose';
import AppError from '../../error/appError';
import httpStatus from 'http-status';

// create student into database
async function createStudentIntoDB(password: string, payload: TStudent) {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, user default password
  userData.password = password || (config.DEFAULT_PASSWORD as string);
  // if(!password) password = config.DEFAULT_PASSWORD as string;

  // set student role
  userData.role = 'student';

  // @ts-expect-error
  const admissionSemester: TAcademicSemester =
    await AcademicSemesterModel.findById(payload.admissionSemester);

  // set generated student id
  userData.id = await generateStudentId(admissionSemester);

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; // reference _id

    const newStudent = await Student.create([payload], { session });

    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
  // create a user
  // const result = await User.create(userData);

  // create a student
}

export const __userService = {
  createStudentIntoDB,
};
