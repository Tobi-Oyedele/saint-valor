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

const nameSchema = z
  .string()
  .min(1, "This field is required")
  .max(50, "Must be 50 characters or less")
  .regex(/^[a-zA-Z\s'-]+$/, "Only letters, spaces, hyphens, and apostrophes allowed");

export const signUpSchema = z.object({
  email: emailSchema,
  password: singlePasswordSchema,
  firstName: nameSchema,
  lastName: nameSchema,
});

export const inquirySchema = z.object({
  email: emailSchema,
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(150, "Subject must be 150 characters or less"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(250, "Message must be 250 characters or less"),
});

export const resetPasswordSchema = passwordConfirmSchema;

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type InquirySchemaType = z.infer<typeof inquirySchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
