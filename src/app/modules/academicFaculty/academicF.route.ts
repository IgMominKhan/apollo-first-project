import { Router } from 'express';
import __academicFController from './academicF.controller';
import validateRequest from '../../utils/validateRequest';
import { academicFacultyValidationSchema } from './academicF.validation';

export const academicFRoute = Router();

academicFRoute.get('/', __academicFController.getAcademicFaculties);

academicFRoute.get('/:id', __academicFController.getAcademicFaculty);

academicFRoute.post(
  '/create-faculty',
  validateRequest(academicFacultyValidationSchema),
  __academicFController.createAcademicFaculty,
);

academicFRoute.patch(
  '/:id',
  validateRequest(academicFacultyValidationSchema),
  __academicFController.updateAcademicFaculty,
);
