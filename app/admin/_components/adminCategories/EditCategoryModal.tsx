"use client";
import { useState, useEffect, useRef } from "react";
import { Category } from "@/types/product";

interface EditCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
  category: Category | null;
  isSaving: boolean;
}

const EditCategoryModal = ({
  isOpen,
  onClose,
  onConfirm,
  category,
  isSaving,
}: EditCategoryModalProps) => {
  const [name, setName] = useState(category?.name ?? "");
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) firstFocusRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-category-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <div className="bg-white rounded-2xl w-full max-w-sm mx-4 px-8 py-10">
        <h2
          id="edit-category-modal-title"
          className="text-xl font-bold text-charcoal mb-6"
        >
          Edit Category
        </h2>

        <div className="mb-8">
          <label className="block text-sm text-secondary mb-2">
            Category Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <button
          ref={firstFocusRef}
          onClick={() => onConfirm(name)}
          disabled={isSaving || !name.trim()}
          className="w-full cursor-pointer bg-gold hover:bg-gold/90 disabled:opacity-60 text-white font-medium py-3 rounded-full transition-colors mb-3"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
        <button
          onClick={onClose}
          disabled={isSaving}
          className="w-full cursor-pointer text-gold font-medium py-3 rounded-full border border-gold hover:bg-gold/5 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCategoryModal;
