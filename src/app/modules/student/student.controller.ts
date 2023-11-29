import studentService from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import Student from './student.model';

// method: GET
// path: /api/v1/students
// get students
const getStudent = catchAsync(async (req, res) => {
  const students = await studentService.getStudentsFromDB();

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Successfully retrieve students data',
    data: students,
  });
});

// method : GET
// path : /api/v1/student/:id
// get student by id
const getSingleStudent = catchAsync(async (req, res) => {
  const data = await studentService.getSingleStudentFromDB(
    Number(req.params?.id),
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Student data retrieve data successfully',
    data: data,
  });
});

// method: DELETE
// path: /api/v1/students/:id
// delete student by id
const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await Student.deleteOne({ id });

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data,
  });
});

export default { getStudent, getSingleStudent, deleteStudent };
