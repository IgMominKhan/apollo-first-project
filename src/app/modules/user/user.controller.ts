import { __userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

// method: POST
// path: /api/v1/student/create-student
const createStudent = catchAsync(async (req, res) => {
  console.log('Passed');
  const { password } = req.body;

  // const { error, studentData } = JoiStudentSchema.validate(student);

  // const validatedStudentData = studentValidationSchema.parse(student);

  const result = await __userService.createStudentIntoDB(
    password,
    req.body.student,
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Student created into database',
    data: result,
  });
});

export const __userController = {
  createStudent,
};
