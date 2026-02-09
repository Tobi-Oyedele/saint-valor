"use client";

import { useState } from "react";
import PasswordInput from "@/components/ui/PasswordInput";

type SignInFormData = {
  email: string;
  password: string;
};

const initialSignInData: SignInFormData = {
  email: "",
  password: "",
};

export default function SignInPage() {
  const [formData, setFormData] = useState<SignInFormData>(initialSignInData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

      // Backend-ready: replace with API call later
      console.log("SIGN IN payload:", formData);

      // Optionally reset
      setFormData(initialSignInData);
    } catch (err) {
      setError("Invalid credentials or something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold">Welcome back</h1>

      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black p-3 text-white disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
