"use client";

import { useState } from "react";
import { resetPasswordSchema } from "@/lib/validation/auth";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";
import Image from "next/image";

type FormErrors = {
  password?: string;
  confirmPassword?: string;
};

type FormData = {
  password?: string;
  confirmPassword?: string;
};

const InitialPasswordData: FormData = {
  password: "",
  confirmPassword: "",
};

export default function NewPasswordPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>(InitialPasswordData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Get the input's name and value
    setFormData((prev) => ({
      //update state
      ...prev, // Keep all existing values
      [name]: value, // Update only the field that changed
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Stop form from refreshing the page

    //zod validation
    const result = resetPasswordSchema.safeParse(formData);

    if (!result.success) {
      // Validation failed - show errors
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        password: fieldErrors.password?.[0] || "",
        confirmPassword: fieldErrors.confirmPassword?.[0] || "",
      });
      return;
    }

    // Start loading state
    setLoading(true);

    try {
      // Make mock API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success! Clear the form
      setFormData(InitialPasswordData);
    } catch (error) {
      // Handle errors
      console.error("Password reset error:", error);
      setErrors({
        password: "",
        confirmPassword: "Failed to reset password. Please try again.",
      });
    } finally {
      // Always stop loading
      setLoading(false);
    }
  }

  return (
    <main className="flex items-center justify-center bg-white p-6 rounded-2xl mx-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <Image
            src="/images/Logo.svg"
            width={44}
            height={44}
            alt="Saint Valor Logo"
          />
          <div>
            <h3 className="text-2xl font-medium mb-2">Create New Password</h3>
            <p className="text-sm text-charcoal">
              Enter a password you can remember, to secure your account
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            error={errors.password}
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            error={errors.confirmPassword}
          />

          <Button
            type="submit"
            label="Reset Password"
            fullWidth
            loading={loading}
            loadingText="Resetting Password..."
          />
        </form>
      </div>
    </main>
  );
}
