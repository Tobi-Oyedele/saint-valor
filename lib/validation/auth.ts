import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Enter a valid email address")
  .transform((email) => email.trim().toLowerCase());

export const singlePasswordSchema = z
  .string()
  .min(1, "Password is required")
  .min(6, "Password must be at least 8 characters");

export const passwordConfirmSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 8 characters"),
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
});

export const resetPasswordSchema = passwordConfirmSchema;

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
