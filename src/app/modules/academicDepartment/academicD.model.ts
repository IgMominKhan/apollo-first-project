import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicD.interface';
import { throws } from 'assert';
import AppError from '../../error/appError';

const academicDepartmentSchema = new Schema<TAcademicDepartment>({
  name: String,
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
  },
});

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExist) throw new Error('Department Already Exist');

  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const department = await AcademicDepartment.findOne(query);
  if (!department) {
    throw new AppError(404, 'Department Not Found');
  }
  next();
});

export const AcademicDepartment = model(
  'AcademicDepartment',
  academicDepartmentSchema,
);
