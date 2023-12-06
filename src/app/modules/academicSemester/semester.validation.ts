import { months, semesterCodes, semesterNames } from './semester.constant';
import { z } from 'zod';

const createSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...semesterNames] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...semesterCodes] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

const updateSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...semesterNames] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...semesterCodes] as [string, ...string[]]).optional(),
    startMonth: z.enum([...months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...months] as [string, ...string[]]).optional(),
  }),
});

export const semesterValidationSchema = {
  createSemesterValidationSchema,
  updateSemesterValidationSchema,
};
