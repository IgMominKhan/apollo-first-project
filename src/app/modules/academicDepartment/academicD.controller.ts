import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import __academicDService from './academicD.service';

const getDepartments = catchAsync(async (_req, res) => {
  const data = await __academicDService.getDepartmentsFromDB();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Academic Departments data retrieve successfully',
    data,
  });
});

const getDepartment = catchAsync(async (req, res) => {
  const data = await __academicDService.getDepartmentFromDB(req.params.id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Academic Department data retrieve successfully',
    data,
  });
});

const createDepartment = catchAsync(async (req, res) => {
  const data = await __academicDService.createDepartmentIntoDB(req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Department created successfully',
    data,
  });
});

const updateDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await __academicDService.updateDepartmentIntoDB(id, req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Department updated successfully',
    data,
  });
});

export default {
  getDepartments,
  getDepartment,
  createDepartment,
  updateDepartment,
};
