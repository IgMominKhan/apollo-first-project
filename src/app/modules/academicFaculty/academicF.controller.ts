import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import __academicFService from './academicF.service';

// get academicFaculties
const getAcademicFaculties = catchAsync(async (_req, res) => {
  const data = await __academicFService.getAcademicFsFromDB();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'academicFaculty data retrieve successfully',
    data,
  });
});

// get academicFaculty
const getAcademicFaculty = catchAsync(async (req, res) => {
  const data = await __academicFService.getAcademicFFromDB(req.params.id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'academicFaculty data retrieve successfully',
    data,
  });
});

// create academicFaculty
const createAcademicFaculty = catchAsync(async (req, res) => {
  const data = await __academicFService.createAcademicFIntoDB(req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'academicFaculty data retrieve successfully',
    data,
  });
});

// update academicFaculty
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await __academicFService.updateAcademicFIntoDB(id, req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'academicFaculty data updated successfully',
    data,
  });
});
export default {
  getAcademicFaculties,
  getAcademicFaculty,
  createAcademicFaculty,
  updateAcademicFaculty,
};
