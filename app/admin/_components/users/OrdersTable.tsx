import { ChevronDown, ChevronRight } from "lucide-react";
import { Order } from "../../../../types";
import { formatDate } from "../../../../lib/utils";

interface OrdersTableProps {
  orders: Order[];
  activeTab: "ongoing" | "past";
  onTabChange: (tab: "ongoing" | "past") => void;
}

const OrdersTable = ({ orders, activeTab, onTabChange }: OrdersTableProps) => {
  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex gap-2 bg-white p-2 rounded-full w-fit">
        <button
          onClick={() => onTabChange("ongoing")}
          className={`px-5 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "ongoing" ? "bg-gold text-white" : "text-secondary"
          }`}
        >
          Ongoing Orders
        </button>
        <button
          onClick={() => onTabChange("past")}
          className={`px-5 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "past" ? "bg-gold text-white" : "text-secondary"
          }`}
        >
          Past Orders
        </button>
      </div>

      {/* Table */}
      {orders.length === 0 ? (
        <p className="text-sm text-secondary">No orders found</p>
      ) : (
        <div className="bg-white rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-secondary border-b border-gray-100">
                <th className="px-6 py-4 font-normal">Order Number</th>
                <th className="px-6 py-4 font-normal">Delivery Date</th>
                <th className="px-6 py-4 font-normal">Total price</th>
                <th className="px-6 py-4 font-normal">Status</th>
                <th className="px-6 py-4 font-normal"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-6 py-4 text-charcoal">{order.orderId}</td>
                  <td className="px-6 py-4 text-charcoal">
                    {formatDate(order.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-charcoal">
                    &#8358;{order.totalPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 border border-gray-200 rounded-md px-2 py-1 text-xs text-secondary cursor-pointer hover:bg-gray-50"
                    >
                      <span className="capitalize">{order.orderStatus}</span>
                      <ChevronDown size={12} />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1 text-xs text-secondary hover:text-charcoal">
                      More details <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
