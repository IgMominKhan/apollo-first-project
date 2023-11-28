import { NextFunction, Request, Response } from 'express';
import { __userService } from './user.service';
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// method: POST
// path: /api/v1/student/create-student
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;

    // const { error, studentData } = JoiStudentSchema.validate(student);

    // const validatedStudentData = studentValidationSchema.parse(student);

    const result = await __userService.createStudentIntoDB(password, student);

    sendResponse(res,{
      status:httpStatus.OK,
      success: true,
      message: 'Student created into database',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const __userController = {
  createStudent,
};
