"use client";

import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import clsx from "clsx";

type PasswordInputProps = {
  label?: "Password" | "Confirm Password";
  name: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: "Enter Password" | "Confirm Password";
  error?: string;
  // autoComplete: string;
};

const PasswordInput = ({
  label = "Password",
  name,
  value,
  onChange,
  placeholder = "Enter Password",
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm text-charcoal">
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={clsx(
            "w-full rounded-lg border bg-white px-3 py-2.5 pr-10 text-sm outline-none",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-placeholder",
          )}
        />

        <button
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/50 hover:text-charcoal"
        >
          {showPassword ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default PasswordInput;
