import {Router} from 'express';
import {__userController} from './user.controller';
import validateRequest from '../../utils/validateRequest';
import studentValidationSchema from '../student/student.validation';

export const userRoute = Router();

userRoute.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  __userController.createStudent,
);
