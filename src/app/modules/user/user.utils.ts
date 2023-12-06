import { TAcademicSemester } from '../academicSemester/semester.interface';
import { User } from './user.model';

async function getLastStudentId() {
  const lastStudent = await User.findOne({ role: 'student' }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent ? lastStudent.id : undefined;
}

export async function generateStudentId(payload: TAcademicSemester) {
  const lastStudentId = await getLastStudentId();

  const lastStudentYear = lastStudentId?.substring(0, 4);
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  let currentStudentId = 0;

  if (
    lastStudentId &&
    lastStudentYear === payload.year &&
    lastStudentSemesterCode === payload.code
  ) {
    currentStudentId = Number(lastStudentId.substring(6));
  }

  const studentId = (currentStudentId + 1).toString().padStart(4, '0');

  return payload.year + payload.code + studentId;
}
