import { NextFunction, Request, Response } from 'express';
import studentService from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// method: GET
// path: /api/v1/student
const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const students = await studentService.getStudentsFromDB();

    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'Successfully retrieve students data',
      data: students,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await studentService.getSingleStudentFromDB(
      Number(req.params?.id),
    );

    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'Student data retrieve data successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

export default { getStudent, getSingleStudent };
