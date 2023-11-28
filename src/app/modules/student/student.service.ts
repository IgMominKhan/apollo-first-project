import { TStudent } from './student.interface';
import Student from './student.model';

// Get students from database
async function getStudentsFromDB() {
  const result = await Student.find();

  return result;
}

async function getSingleStudentFromDB(id: number) {
  return Student.findOne({ id });
}

export default {
  getStudentsFromDB,
  getSingleStudentFromDB,
};
