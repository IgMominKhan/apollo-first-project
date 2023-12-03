import { z } from "zod";

const create = z.object({
  body: z.object({
    name: z.string(),
    academicFaculty: z.string({
      invalid_type_error: "AcademicFaculty must be string",
      required_error: "AcademicFaculty is required",
    }),
  }),
});

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    academicFaculty: z.string({
      invalid_type_error: "AcademicFaculty must be string",
      required_error: "AcademicFaculty is required",
    }).optional(),
  }),
});

export default {
  update,
  create,
};
