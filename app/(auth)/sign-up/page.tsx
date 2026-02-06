"use client";

import { useState } from "react";

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

    // basic validation example
    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      // Backend-ready: replace this with your API call later
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
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Create account</h1>

      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-1">
          <label className="text-sm">First name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            autoComplete="given-name"
            className="w-full rounded border p-3"
            placeholder="John"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm">Last name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            autoComplete="family-name"
            className="w-full rounded border p-3"
            placeholder="Doe"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm">Email address</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            autoComplete="email"
            className="w-full rounded border p-3"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm">Password</label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            autoComplete="new-password"
            className="w-full rounded border p-3"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black p-3 text-white disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>
      </form>
    </main>
  );
}
