import { MapPin } from "lucide-react";

const BillingAddress = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-4">
        Billing Address
      </h3>
      <div className="border border-border rounded-md bg-white p-8 flex flex-col items-center justify-center text-center gap-3 min-h-45">
        <MapPin className="w-6 h-6 text-secondary" />
        <div>
          <p className="text-sm font-medium text-charcoal">No Addresses</p>
          <p className="text-xs text-secondary mt-0.5">
            You&apos;ve not saved any addresses
          </p>
        </div>
        <button className="mt-1 px-5 py-2 border border-gold text-gold text-sm rounded-md hover:bg-gold hover:text-white transition">
          Add Address
        </button>
      </div>
    </div>
  );
};

export default BillingAddress;
