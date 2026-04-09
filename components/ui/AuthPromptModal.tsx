"use client";

import Link from "next/link";
import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface AuthPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AuthPromptModal = ({
  isOpen,
  onClose,
  icon,
  title,
  description,
}: AuthPromptModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="backdrop:bg-black/50 bg-transparent p-4 m-auto"
      aria-labelledby="auth-modal-title"
    >
      <div className="relative bg-white rounded-xl p-8 w-full max-w-sm shadow-xl text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-secondary hover:text-charcoal transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mx-auto mb-4">
          {icon}
        </div>

        <h2
          id="auth-modal-title"
          className="text-base font-semibold text-charcoal mb-2"
        >
          {title}
        </h2>
        <p className="text-sm text-secondary mb-6">{description}</p>

        <div className="flex flex-col gap-3">
          <Link
            href="/sign-in"
            onClick={onClose}
            className="w-full py-2.5 bg-gold text-white text-sm font-medium rounded-md hover:opacity-90 transition text-center"
          >
            Sign In
          </Link>
          <button
            onClick={onClose}
            className="w-full py-2.5 border border-border text-charcoal text-sm rounded-md hover:bg-ivory transition cursor-pointer"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AuthPromptModal;
