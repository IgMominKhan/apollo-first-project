import { Router } from 'express';
import __semesterController from './semester.controller';
import validateRequest from '../../utils/validateRequest';
import { semesterValidationSchema as Validation } from './semester.validation';

export const semesterRoute: Router = Router();

// get all semesters
semesterRoute.get('/', __semesterController.getSemesters);

// get single semesters
semesterRoute.get('/:_id', __semesterController.getSemester);

// create semester
semesterRoute.post(
  '/create-semester',
  validateRequest(Validation.createSemesterValidationSchema),
  __semesterController.createSemester,
);

// update semester
semesterRoute.patch(
  '/:_id',
  validateRequest(Validation.updateSemesterValidationSchema),
  __semesterController.updateSemester,
);
