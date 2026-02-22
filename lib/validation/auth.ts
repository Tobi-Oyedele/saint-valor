import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, { message: "Email is required" })
  .email({ message: "Must be a valid email address" })
  .toLowerCase();

export const singlePasswordSchema = z
  .string()
  .refine((val) => val.length > 0, {
    message: "Password is required",
    abort: true,
  })
  .refine((val) => val.length >= 8, {
    message: "Password must be at least 8 characters",
    abort: true,
  })
  .refine((val) => val.length <= 64, {
    message: "Password is too long",
    abort: true,
  })
  .refine((val) => /[A-Z]/.test(val), {
    message: "Must contain at least one uppercase letter",
    abort: true,
  })
  .refine((val) => /[a-z]/.test(val), {
    message: "Must contain at least one lowercase letter",
    abort: true,
  })
  .refine((val) => /[0-9]/.test(val), {
    message: "Must contain at least one number",
    abort: true,
  })
  .refine((val) => /[^a-zA-Z0-9]/.test(val), {
    message: "Must contain at least one special character",
    abort: true,
  });

export const passwordConfirmSchema = z
  .object({
    password: singlePasswordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

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

export const firstNameSchema = nameSchema.refine((val) => !/\d/.test(val), {
  message: "First name cannot contain numbers",
});

export const lastNameSchema = nameSchema.refine((val) => !/\d/.test(val), {
  message: "Last name cannot contain numbers",
});

export const signInSchema = z.object({
  email: emailSchema,
  password: singlePasswordSchema,
});

export const signUpSchema = z.object({
  email: emailSchema,
  password: singlePasswordSchema,
  firstName: firstNameSchema,
  lastName: lastNameSchema,
});

export const resetPasswordSchema = passwordConfirmSchema;

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
