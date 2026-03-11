"use client";
import { useState } from "react";
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-sm mx-4 px-8 py-10">
        <h2 className="text-xl font-bold text-charcoal mb-6">Edit Category</h2>

        {/* Input */}
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

        {/* Actions */}
        <button
          onClick={() => onConfirm(name)}
          disabled={isSaving || !name.trim()}
          className="w-full bg-gold hover:bg-gold/90 disabled:opacity-60 text-white font-medium py-3 rounded-full transition-colors mb-3"
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
        <button
          onClick={onClose}
          disabled={isSaving}
          className="w-full text-gold font-medium py-3 rounded-full border border-gold hover:bg-gold/5 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCategoryModal;
