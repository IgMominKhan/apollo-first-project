import express from 'express';
import __studentController from './student.controller';

// student router
export const studentRoute = express.Router();

// get students
studentRoute.get('/', __studentController.getStudent);

// get a single student
studentRoute.get('/:id', __studentController.getSingleStudent);

// delete student by id
studentRoute.delete('/:id', __studentController.deleteStudent);
