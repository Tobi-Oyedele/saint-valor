"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function ShopError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-4 gap-5">
      <AlertTriangle size={40} className="text-gold" />
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-medium text-charcoal">
          Something went wrong
        </p>
        <p className="text-xs text-secondary text-center">
          We ran into an unexpected error. Please try again.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={reset}
          className="text-xs font-semibold text-white bg-gold px-6 py-2.5 hover:bg-gold/90 transition-colors duration-200 cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="text-xs font-medium text-secondary hover:text-charcoal transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
