import catchAsync from '../../utils/catchAsync';
import __semesterService from './semester.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// get all the semester
// method: GET
// path /api/v1/semesters

const getSemesters = catchAsync(async (req, res) => {
  const data = await __semesterService.getSemestersFromDB();
  sendResponse(res, {
    success: true,
    message: 'Semester data retrieve successfully',
    status: httpStatus.OK,
    data,
  });
});

// get single semester
// method: GET
// path /api/v1/semesters/:_id

const getSemester = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const data = await __semesterService.getSemesterFromDB(_id);
  sendResponse(res, {
    success: true,
    message: 'Semester data retrieve successfully',
    status: httpStatus.OK,
    data,
  });
});
// create a semester
// method: POST
// path /api/v1/semesters/create-semester

const createSemester = catchAsync(async function (req, res) {
  const data = await __semesterService.createSemesterInto(req.body);
  sendResponse(res, {
    success: true,
    message: 'Semester created successfully',
    status: httpStatus.OK,
    data,
  });
});

// update semester by _id
// method: PATCH
// path /api/v1/semesters/:_id
const updateSemester = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const data = await __semesterService.updateSemesterIntoDB(_id, req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Semester updated successfully',
    data,
  });
});
//
export default { getSemesters, getSemester, createSemester, updateSemester };
