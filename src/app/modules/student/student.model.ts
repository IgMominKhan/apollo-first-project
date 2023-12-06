import { model, Schema } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentMethod,
  TStudentModel,
  TUserName,
} from './student.interface';

export const userNameSchema = new Schema<TUserName>(
  {
    firstName: {
      type: String,
      required: [true, 'firstName is required'],
    },
    middleName: String,
    lastName: String,
  },
  { _id: false },
);

const guardianSchema = new Schema<TGuardian>(
  {
    fatherName: String,
    fatherOccupation: String,
    fatherContactNo: String,
    motherName: String,
    motherOccupation: String,
    motherContactNo: String,
  },
  { _id: false },
);

const localGuardianSchema = new Schema<TLocalGuardian>(
  {
    name: String,
    occupation: String,
    contactNo: String,
    address: String,
  },
  { _id: false },
);

const studentSchema = new Schema<TStudent, TStudentModel, TStudentMethod>({
  // @ts-expect-error error
  id: {
    type: String,
    required: [true, 'Duplicate student Id'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: [true, 'User id is required'],
    ref: 'User',
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
    required: true,
  },
  dateOfBirth: Date,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    maxlength: 14,
    minlength: 8,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: String,
  permanentAddress: String,
  guardian: guardianSchema,
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: String,
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// studentSchema.method("fullName", function () {
//   return this.name.firstName + this.name?.middleName + this.name.lastName;
// });
//
// studentSchema.method("isUserExists",async function(id:number){
//     const result = Student.findOne({id})
//   return result;
// });

// studentSchema.methods.fullName = async function () {
//   return `${this.name.firstName} ${this.name?.middleName} ${this.name.lastName}`;
// };
//
// @ts-expect-error error
studentSchema.methods.isUserExists = async function (id: number) {
  return await Student.findOne({ id });
};

const Student = model<TStudent, TStudentModel, TStudentMethod>(
  'Student',
  // @ts-expect-error error
  studentSchema,
);
export default Student;
