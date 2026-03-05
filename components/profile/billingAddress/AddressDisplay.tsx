import { Pencil, MapPin } from "lucide-react";
import { Address } from "@/types/address";

interface AddressDisplayProps {
  address: Address | null;
  onEdit: () => void;
}

const AddressDisplay = ({ address, onEdit }: AddressDisplayProps) => {
  return (
    <div className="border border-border rounded-md bg-white p-6">
      {address ? (
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-secondary">{address.street}</p>
            {address.city ? (
              <p className="text-sm text-secondary">
                {address.city}, {address.state}
              </p>
            ) : (
              <p className="text-sm text-secondary">{address.state}</p>
            )}
            <p className="text-sm text-secondary">{address.zipCode}</p>
            <p className="text-sm text-secondary">{address.country}</p>
          </div>
          <button
            onClick={onEdit}
            className="text-secondary hover:text-charcoal transition shrink-0 cursor-pointer"
          >
            <Pencil className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center gap-2 min-h-30">
          <MapPin className="w-6 h-6 text-secondary" />
          <p className="text-sm font-medium text-charcoal">No Address</p>
          <p className="text-xs text-secondary">
            You&apos;ve not saved an address yet
          </p>
        </div>
      )}
    </div>
  );
};

export default AddressDisplay;
