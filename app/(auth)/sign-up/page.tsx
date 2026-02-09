"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PasswordInput from "@/components/ui/PasswordInput";

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

    const newErrors: FormErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      console.log("SIGN UP payload:", formData);

      setFormData(initialSignUpData);
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
          src="/images/sign-up.png"
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

          <h1 className="mt-5 text-3xl font-semibold text-charcoal sm:text-4xl">
            Sign Up
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-secondary">
            Join Saint Valor and unlock exclusive access to our curated fine
            jewelry collections.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm text-charcoal">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                autoComplete="email"
                placeholder="Enter Email Address"
                className="w-full rounded-lg border border-placeholder bg-white px-3 py-2.5 text-sm outline-none"
              />
              {errors.email ? (
                <p className="text-xs text-red-600">{errors.email}</p>
              ) : null}
            </div>

            <div className="relative">
              <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                autoComplete="new-password"
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
                  className="w-full rounded-lg border border-placeholder bg-white px-3 py-2.5 text-sm outline-none"
                />
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
                  className="w-full rounded-lg border border-placeholder bg-white px-3 py-2.5 text-sm outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer mt-2 w-full rounded-full bg-gold py-3 text-sm font-medium text-white disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>

            <p className="pt-1 text-center text-xs text-secondary">
              Already have an account?
              <Link
                href="/sign-in"
                className="text-charcoal underline underline-offset-4"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
