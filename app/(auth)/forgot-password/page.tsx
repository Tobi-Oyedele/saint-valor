"use client";

import { useState } from "react";
import Image from "next/image";
import EmailInput from "@/components/ui/EmailInput";
import { emailSchema } from "@/lib/validation/auth";

type FormData = { email: string };
type FormErrors = { email?: string; form?: string };

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // clear errors as user edits
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setErrors({});
    setSuccess(false);

    const result = emailSchema.safeParse(formData.email);

    if (!result.success) {
      setErrors({ email: result.error.issues[0]?.message });
      return;
    }

    // const email = result.data;

    setLoading(true);

    try {
      // Simulate API call for now (remove when backend is ready)
      await sleep(900);

      // Use `email` when backend is ready
      // await fetch("/api/auth/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });

      setSuccess(true);
      setFormData({ email: "" });
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex items-center justify-center bg-white p-10 rounded-2xl mx-4">
      <div className="w-full max-w-md space-y-6">
        <Image
          src="/images/Logo.svg"
          width={44}
          height={44}
          alt="Saint Valor Logo"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-medium text-charcoal">
            Reset Your Password
          </h1>
          <p className="text-sm text-charcoal">
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </p>
        </div>
        {success && (
          <div className="rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800">
            If an account exists for that email, we’ve sent a password reset
            link.
          </div>
        )}
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

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-full bg-gold px-4 py-3 text-sm font-medium text-ivory transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}
