import { useEffect, useRef } from "react";
import { OrderStatus } from "@/types/adminOrder";

interface StatusConfirmModalProps {
  isOpen: boolean;
  newStatus: OrderStatus | null;
  isLoading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function StatusConfirmModal({
  isOpen,
  newStatus,
  isLoading,
  onConfirm,
  onCancel,
}: StatusConfirmModalProps) {
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) firstFocusRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);

  if (!isOpen || !newStatus) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="status-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl px-8 py-8 w-full max-w-sm mx-4 text-center">
        <h2
          id="status-modal-title"
          className="text-xl font-semibold text-charcoal mb-2"
        >
          Change Status
        </h2>
        <p className="text-secondary text-sm mb-6">
          Are you sure you want to change the status of this order to{" "}
          <span className="font-medium text-charcoal">{newStatus}</span>?
        </p>

        <button
          ref={firstFocusRef}
          onClick={onConfirm}
          disabled={isLoading}
          className="w-full py-3 cursor-pointer bg-gold text-white rounded-xl font-medium text-sm hover:bg-[#c09a2f] transition-colors disabled:opacity-60 mb-3"
        >
          {isLoading ? "Updating..." : "Yes"}
        </button>

        <button
          onClick={onCancel}
          disabled={isLoading}
          className="w-full py-2 cursor-pointer text-gold font-medium text-sm hover:underline transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
