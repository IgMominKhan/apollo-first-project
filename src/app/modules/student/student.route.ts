import express from 'express';
import studentController from './student.controller';

// student router
export const studentRoute = express.Router();

// get students
studentRoute.get('/', studentController.getStudent);

studentRoute.get('/:id', studentController.getSingleStudent);
