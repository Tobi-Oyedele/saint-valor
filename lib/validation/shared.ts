import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, { message: "Email is required" })
  .email({ message: "Must be a valid email address" })
  .toLowerCase();

const nameSchema = z
  .string()
  .superRefine((val, ctx) => {
    if (val.trim().length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "This field is required",
        fatal: true,
      });
    }
  })
  .max(50, { message: "Name cannot exceed 50 characters" })
  .regex(/^[a-zA-Z\s'-]+$/, {
    message: "Name can only contain letters, spaces, hyphens, and apostrophes",
  });

export const firstNameSchema = nameSchema;
export const lastNameSchema = nameSchema;
