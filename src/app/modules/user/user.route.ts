import { Router } from 'express';
import { __userController } from './user.controller';

export const userRoute = Router();

userRoute.post('/create-student', __userController.createStudent);
