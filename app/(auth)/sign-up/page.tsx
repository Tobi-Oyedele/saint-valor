"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EyeOff } from "lucide-react";

type SignUpFormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
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
  const [error, setError] = useState<string>("");

  // One handler for all inputs
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    // name MUST match a key in formData
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      console.log("SIGN UP payload:", formData);

      // Example: reset form after success
      setFormData(initialSignUpData);
    } catch (err) {
      setError("Something went wrong. Please try again.");
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

          {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

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
                className="w-full rounded-lg border border-placeholder bg-white px-3 py-2.5 text-sm outline-none focus:border-burgundy/40 focus:ring-2 focus:ring-burgundy/10"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-charcoal">Password</label>

              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  autoComplete="new-password"
                  placeholder="Enter Password"
                  className="w-full rounded-lg border border-placeholder bg-white px-3 py-2.5 pr-10 text-sm outline-none focus:border-burgundy/40 focus:ring-2 focus:ring-burgundy/10"
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/50 hover:text-charcoal"
                >
                  <EyeOff className="h-4 w-4" />
                </button>
              </div>
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
                  className="w-full rounded-lg border border-placeholder bg-white px-3 py-2.5 text-sm outline-none focus:border-burgundy/40 focus:ring-2 focus:ring-burgundy/10"
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
                  className="w-full rounded-lg border border-placeholder bg-white px-3 py-2.5 text-sm outline-none focus:border-burgundy/40 focus:ring-2 focus:ring-burgundy/10"
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

            {/* Optional: small text under button like your screenshot */}
            <p className="pt-1 text-center text-xs text-secondary">
              Already have an account?{" "}
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
