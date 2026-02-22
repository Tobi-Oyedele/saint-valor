"use client";

import { useState } from "react";
import { resetPasswordSchema } from "@/lib/validation/auth";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import AuthHeader from "@/components/ui/AuthHeader";

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

export default function ResetPasswordPage() {
  const router = useRouter();
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

      // Success! Route ro success page
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

    router.push("/reset-password/success");
  }

  return (
    <main className="flex items-center justify-center bg-white p-6 rounded-2xl mx-4">
      <div className="w-full max-w-md space-y-4">
        <AuthHeader
          title="Create New Password"
          description="Enter a password you can remember, to secure your account"
        />

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
