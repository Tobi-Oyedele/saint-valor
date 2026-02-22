"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PasswordInput from "@/components/ui/PasswordInput";
import EmailInput from "@/components/ui/EmailInput";
import { signUpSchema } from "@/lib/validation/auth";
import Button from "@/components/ui/Button";
import GoogleSSOButton from "@/components/ui/GoogleSSOButton";
import OrDivider from "@/components/ui/OrDivider";

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

          <OrDivider />

          <GoogleSSOButton />
        </div>
      </div>
    </main>
  );
}
