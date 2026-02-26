"use client";

import { useState } from "react";
import EmailInput from "@/components/ui/EmailInput";
import { emailSchema } from "@/lib/validation/auth";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { mockForgotPassword } from "@/lib/mockAuth";
import AuthHeader from "@/components/ui/AuthHeader";
import AuthWrapper from "@/components/auth/AuthWrapper";

type FormData = { email: string };
type FormErrors = { email?: string; form?: string };

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // clear errors as user edits
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setErrors({});

    const result = emailSchema.safeParse(formData.email);

    if (!result.success) {
      setErrors({ email: result.error.issues[0]?.message });
      return;
    }

    const email = result.data.trim().toLowerCase();

    setLoading(true);

    try {
      const res = await mockForgotPassword(email);

      if (res.ok) {
        router.push(`/check-inbox?email=${encodeURIComponent(email)}`);
        setFormData({ email: "" });
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthWrapper>
      <main className="flex items-center justify-center bg-white p-10 rounded-2xl mx-4">
        <div className="w-full max-w-md space-y-6">
          <AuthHeader
            title="Reset Your Password"
            description="Enter the email address associated with your account and we will
            send you a link to reset your password."
          />

          {errors.form && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
              {errors.form}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <EmailInput
              label="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              error={errors.email}
            />

            <Button type="submit" label="Send" fullWidth loading={loading} />
          </form>
        </div>
      </main>
    </AuthWrapper>
  );
}
