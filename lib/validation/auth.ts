import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, { message: "Email is required" })
  .email({ message: "Must be a valid email address" })
  .toLowerCase();

export const singlePasswordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(100, { message: "Password is too long" })
  .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
  .regex(/[0-9]/, { message: "Must contain at least one number" })
  .regex(/[^a-zA-Z0-9]/, {
    message: "Must contain at least one special character",
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

export const nameSchema = z
  .string()
  .min(1)
  .max(50)
  .regex(/^[a-zA-Z\s'-]+$/);

export const signInSchema = z.object({
  email: emailSchema,
  password: singlePasswordSchema,
});

export const signUpSchema = z.object({
  email: emailSchema,
  password: singlePasswordSchema,
});

export const resetPasswordSchema = passwordConfirmSchema;

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
