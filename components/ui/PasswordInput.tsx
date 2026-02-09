"use client";

import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import clsx from "clsx";

type PasswordInputProps = {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoComplete: string;
  error?: string;
};

const PasswordInput = ({
  label = "Password",
  name,
  value,
  onChange,
  placeholder = "Enter Password",
  autoComplete = "current-password",
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
          value={value}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={clsx(
            "w-full rounded-lg border bg-white px-3 py-2.5 pr-10 text-sm outline-none focus:border-burgundy/40 focus:ring-2 focus:ring-burgundy/10",
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
