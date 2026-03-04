import { ChevronDown, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { RecentOrder } from "@/types/order";

interface OrderRowProps {
  order: RecentOrder;
}

const statusStyles: Record<RecentOrder["orderStatus"], string> = {
  ongoing: "bg-[#f3f4f6] text-[#1a1a1a]",
  pending: "bg-yellow-50 text-yellow-600",
  completed: "bg-green-50 text-green-600",
  cancelled: "bg-red-50 text-red-600",
};

const OrderRow = ({ order }: OrderRowProps) => {
  const router = useRouter();

  const formattedDate = new Date(order.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedPrice = `₦${order.totalPrice.toLocaleString()}`;

  return (
    <tr className="border-b border-[#C9A050]/10 hover:bg-[#F5F0E8]/40 transition-colors">
      {/* User */}
      <td className="py-4 px-4 text-sm text-[#1a1a1a] font-medium">
        {order.firstName} {order.lastName}
      </td>

      {/* Order Number */}
      <td className="py-4 px-4 text-sm text-charcoal">#{order.orderId}</td>

      {/* Date */}
      <td className="py-4 px-4 text-sm text-charcoal">{formattedDate}</td>

      {/* Total Price */}
      <td className="py-4 px-4 text-sm text-charcoal">{formattedPrice}</td>

      {/* Status */}
      <td className="py-4 px-4">
        <span
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium ${statusStyles[order.orderStatus]}`}
        >
          {order.orderStatus.charAt(0).toUpperCase() +
            order.orderStatus.slice(1)}
          <ChevronDown size={12} />
        </span>
      </td>

      {/* More Details */}
      <td className="py-4 px-4">
        <button
          onClick={() => router.push(`/admin/orders/${order._id}`)}
          className="inline-flex items-center gap-1 text-sm text-[#1a1a1a]/50 hover:text-[#C9A050] transition-colors font-medium"
        >
          More details
          <ChevronRight size={14} />
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
