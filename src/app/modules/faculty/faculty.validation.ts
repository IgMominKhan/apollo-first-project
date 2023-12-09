import { z } from 'zod';
import {
  createUserNameValidationSchema,
  updateUserNameValidationSchema,
} from '../student/student.validation';

const create = z.object({
  body: z.object({
    password: z.string().optional(),
    faculty: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['male', ' female', 'other']),
      dateOfBirth: z.date().optional(),
      email: z.string().email('Invalid email format'),
      contactNo: z.string().min(8).max(15),
      emergencyContactNo: z
        .string()
        .min(8, { message: 'Emergency contact number is too short' })
        .max(15, {
          message: 'Emergency contact number is too long',
        }),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      profileImage: z.string(),
    }),
  }),
});

const update = z.object({
  body: z.object({
    faculty: z.object({
      name: updateUserNameValidationSchema.optional(),
      gender: z.enum(['male', ' female', 'other']).optional(),
      dateOfBirth: z.date().optional(),
      email: z.string().email('Invalid email format').optional(),
      contactNo: z.string().min(8).max(15).optional(),
      emergencyContactNo: z
        .string()
        .min(8, { message: 'Emergency contact number is too short' })
        .max(15, {
          message: 'Emergency contact number is too long',
        })
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      profileImage: z.string().optional(),
    }),
  }),
});

export default { create, update };
