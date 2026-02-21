"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PasswordInput from "@/components/ui/PasswordInput";
import EmailInput from "@/components/ui/EmailInput";
import { signUpSchema } from "@/lib/validation/auth";
import Button from "@/components/ui/Button";

type SignUpFormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type FormErrors = {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  form?: string;
};

const initialSignUpData: SignUpFormData = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

export default function SignUpPage() {
  const [formData, setFormData] = useState<SignUpFormData>(initialSignUpData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    //clear errors while typing
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = signUpSchema.safeParse(formData);

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

      setFormData(initialSignUpData);
      setErrors({});
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2 w-full">
      <div className="relative hidden lg:block min-h-screen">
        <Image
          src="/images/sign-up.png"
          alt="sign up image"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
      </div>

      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-6">
          <Link href="/" aria-label="Go to homepage" className="inline-flex">
            <Image
              src="/images/Logo.svg"
              width={44}
              height={44}
              alt="Saint Valor Logo"
            />
          </Link>

          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <p className="mt-2 text-sm leading-relaxed text-secondary">
            Join Saint Valor and unlock exclusive access to our curated fine
            jewelry collections.
          </p>

          <form onSubmit={handleSubmit} className="mt-3 space-y-2">
            <div className="space-y-1.5">
              <EmailInput
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                error={errors.email}
              />
            </div>

            <div className="relative">
              <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                error={errors.password}
              />
            </div>

            <div className="grid gap-3 grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm text-charcoal">First name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  autoComplete="given-name"
                  placeholder="Enter First Name"
                  className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none ${errors.firstName ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-placeholder"}`}
                />
                {errors.firstName ? (
                  <p className="text-xs text-red-600">{errors.firstName}</p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm text-charcoal">Last name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  autoComplete="family-name"
                  placeholder="Enter Last Name"
                  className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none ${errors.lastName ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-placeholder"}`}
                />
                {errors.lastName ? (
                  <p className="text-xs text-red-600">{errors.lastName}</p>
                ) : null}
              </div>
            </div>

            <Button
              type="submit"
              label="Create Account"
              fullWidth
              loading={loading}
              loadingText="Creating account..."
            />

            <p className="pt-1 text-center text-xs text-secondary">
              Already have an account?
              <Link href="/sign-in" className="text-charcoal underline pl-2">
                Log In
              </Link>
            </p>
          </form>

          <div className="flex items-center gap-3 my-3">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-secondary">Or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <button className="google-sso">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
}
