import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import  __FacultyServices from './faculty.service';

const getSingleFaculty = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await __FacultyServices.getSingleFacultyFromDB( id );

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Faculty is retrieved successfully',
        data: result,
    });
});

const getAllFaculties = catchAsync(async (req, res) => {
    const result = await __FacultyServices.getAllFacultiesFromDB(req.query);

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Faculties are retrieved successfully',
        data: result,
    });
});

const updateFaculty = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { faculty } = req.body;
    const result = await __FacultyServices.updateFacultyIntoDB( id , faculty);

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Faculty is updated successfully',
        data: result,
    });
});

const deleteFaculty = catchAsync(async (req, res) => {
    const {  id } = req.params;
    const result = await __FacultyServices.deleteFacultyFromDB(id);

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Faculty is deleted successfully',
        data: result,
    });
});

export const FacultyControllers = {
    getAllFaculties,
    getSingleFaculty,
    deleteFaculty,
    updateFaculty,
};
