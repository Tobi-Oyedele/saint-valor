"use client";

import { useState } from "react";
import PasswordInput from "@/components/ui/PasswordInput";
import EmailInput from "@/components/ui/EmailInput";
import Link from "next/link";
import Image from "next/image";
import { signInSchema } from "@/lib/validation/auth";

type SignInFormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string;
  password?: string;
  form?: string;
};

const initialSignInData: SignInFormData = {
  email: "",
  password: "",
};

export default function SignInPage() {
  const [formData, setFormData] = useState<SignInFormData>(initialSignInData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = signInSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormErrors;
        fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    try {
      setLoading(true);

      console.log("SIGN IN payload:", result.data);

      setFormData(initialSignInData);
      setErrors({});
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="relative hidden lg:block min-h-screen">
        <Image
          src="/images/sign-in.png"
          alt="sign up image"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
      </div>

      <div className="flex min-h-screen items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-115 rounded-2xl bg-white p-6 sm:p-10">
          <Link href="/" aria-label="Go to homepage" className="inline-flex">
            <Image
              src="/images/Logo.svg"
              width={44}
              height={44}
              alt="Saint Valor Logo"
            />
          </Link>

          <h1 className="text-2xl font-semibold">Sign In</h1>
          <p className="mt-3 text-sm leading-relaxed text-secondary">
            Welcome back to Saint Valor — continue your journey through curated
            luxury jewelry.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-1">
              <EmailInput
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                error={errors.email}
              />
            </div>

            <div className="space-y-1">
              <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                error={errors.password}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer mt-2 w-full rounded-full bg-gold py-3 text-sm font-medium text-white disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="pt-1 text-center text-xs text-secondary">
              Don&apos;t have an account?
              <Link href="/sign-up" className="text-charcoal underline pl-2">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
