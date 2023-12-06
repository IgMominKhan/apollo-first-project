import { Router } from 'express';
import __academicDController from './academicD.controller';
import validateRequest from '../../utils/validateRequest';
import AcademicDValidation from './academicD.validation';
import academicDValidation from './academicD.validation';

export const academicDepartmentRoute = Router();

// getDepartments
academicDepartmentRoute.get('/', __academicDController.getDepartments);

// getDepartment
academicDepartmentRoute.get('/:id', __academicDController.getDepartment);

// createDepartment
academicDepartmentRoute.post(
  '/',
  validateRequest(AcademicDValidation.create),
  __academicDController.createDepartment,
);

// updateDepartment
academicDepartmentRoute.patch(
  '/:id',
  validateRequest(academicDValidation.update),
  __academicDController.updateDepartment,
);
