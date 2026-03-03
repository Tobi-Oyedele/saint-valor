import { useRouter } from "next/navigation";

const OrdersTab = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
      <p className="text-charcoal font-medium">No Orders Yet</p>
      <p className="text-sm text-secondary">
        Your order history will appear here.
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-2 px-6 py-2.5 bg-gold text-white text-sm font-medium rounded-md hover:opacity-90 transition"
      >
        Start Shopping
      </button>
    </div>
  );
};

export default OrdersTab;
