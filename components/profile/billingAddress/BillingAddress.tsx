"use client";

import { useState } from "react";
import { Address } from "@/types/address";
import AddressDisplay from "./AddressDisplay";
import AddressFormModal from "./AddressFormModal";

interface BillingAddressProps {
  address: Address | null;
  onSave: (address: Address) => void;
}

const EMPTY_FORM: Address = {
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
};

const BillingAddress = ({ address, onSave }: BillingAddressProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<Address>(EMPTY_FORM);

  const handleChange = (field: keyof Address, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpen = () => {
    setFormData(address ?? EMPTY_FORM);
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await onSave(formData);
      setShowModal(false);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wide">
          Billing Address
        </h3>
        <button
          onClick={handleOpen}
          className="px-4 py-1.5 border border-gold text-gold text-xs rounded-md hover:bg-gold hover:text-white transition cursor-pointer"
        >
          {address ? "Edit Address" : "Add Address"}
        </button>
      </div>

      <AddressDisplay address={address} onEdit={handleOpen} />

      {showModal && (
        <AddressFormModal
          formData={formData}
          isEditing={!!address}
          isSaving={isSaving}
          onChange={handleChange}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default BillingAddress;
