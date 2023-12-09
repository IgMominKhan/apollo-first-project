import express from 'express';
import { FacultyControllers } from './faculty.controller';
import facultyValidation from './faculty.validation';
import validateRequest from "../../utils/validateRequest";

const facultyRoute = express.Router();

facultyRoute.get('/:id', FacultyControllers.getSingleFaculty);

facultyRoute.patch(
    '/:id',
    validateRequest(facultyValidation.update),
    FacultyControllers.updateFaculty,
);

facultyRoute.delete('/:id', FacultyControllers.deleteFaculty);

facultyRoute.get('/', FacultyControllers.getAllFaculties);

export default facultyRoute;