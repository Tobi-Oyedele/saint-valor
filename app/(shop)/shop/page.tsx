import { Suspense } from "react";
import ShopContent from "@/components/shop/ShopContent";

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center">
          <p className="text-sm text-secondary">Loading...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
