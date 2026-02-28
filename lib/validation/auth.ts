import { z } from "zod";
import { emailSchema, firstNameSchema, lastNameSchema } from "./shared";
export { emailSchema, firstNameSchema, lastNameSchema } from "./shared";

export const singlePasswordSchema = z.string().superRefine((val, ctx) => {
  if (val.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password is required",
      fatal: true,
    });
    return z.NEVER;
  }

  if (val.length < 8) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password must be at least 8 characters",
      fatal: true,
    });
    return z.NEVER;
  }

  if (val.length > 64) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password is too long",
      fatal: true,
    });
    return z.NEVER;
  }

  if (!/[A-Z]/.test(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Must contain at least one uppercase letter",
      fatal: true,
    });
    return z.NEVER;
  }

  if (!/[a-z]/.test(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Must contain at least one lowercase letter",
      fatal: true,
    });
    return z.NEVER;
  }

  if (!/[0-9]/.test(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Must contain at least one number",
      fatal: true,
    });
    return z.NEVER;
  }
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
