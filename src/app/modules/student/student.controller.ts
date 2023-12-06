import __studentService from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import Student from './student.model';

// method: GET
// path: /api/v1/students
// get students
const getStudent = catchAsync(async (req, res) => {
  const students = await __studentService.getStudentsFromDB();

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
  const data = await __studentService.getSingleStudentFromDB(
    Number(req.params?.id),
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Student retrieve data successfully',
    data: data,
  });
});

// method: DELETE
// path: /api/v1/students/:id
// delete student by id
const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await __studentService.deleteStudentFromDB(id);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data,
  });
});

// method: PUT
// path: /api/v1/student/:id
// update student
const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;

  const data = await __studentService.updateStudentIntoDB(id, student);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Student updated successfully',
    data,
  });
});
export default { getStudent, getSingleStudent, deleteStudent, updateStudent };
