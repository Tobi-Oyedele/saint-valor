"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  size: string;
}

interface Order {
  _id: string;
  orderId: string;
  items: OrderItem[];
  totalPrice: number;
  orderStatus: string;
  paymentStatus: string;
  createdAt: string;
}

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  memberSince: string;
}

interface UserDetails {
  user: User;
  ongoingOrders: Order[];
  pastOrders: Order[];
}

export default function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [data, setData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"ongoing" | "past">("ongoing");
  const router = useRouter();
  const { id } = React.use(params);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://saint-valor-backend.onrender.com/api/v1/admin/users/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        const result = await response.json();
        setData(result.data);
      } catch {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6">{error}</div>;
  if (!data) return null;

  const { user, ongoingOrders, pastOrders } = data;
  const activeOrders = activeTab === "ongoing" ? ongoingOrders : pastOrders;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const datePart = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const timePart = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    return `${datePart} at ${timePart}`;
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-secondary">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 cursor-pointer"
        >
          <ChevronLeft size={14} /> Back
        </button>
        <span className="text-secondary">|</span>
        <button
          type="button"
          onClick={() => router.back()}
          className="cursor-pointer underline text-secondary"
        >
          User
        </button>
        <span className="text-secondary">|</span>
        <span className="text-charcoal font-medium underline">
          User Details
        </span>
      </div>

      <h1 className="text-2xl font-semibold text-charcoal">User Details</h1>

      {/* User Info Card */}
      <div className="rounded-2xl px-6 py-5 flex items-center gap-8">
        <p className="font-medium text-charcoal text-sm min-w-30">
          {user.firstName} {user.lastName}
        </p>
        <div className="h-8 w-px bg-gray-100" />
        <div>
          <p className="text-xs text-secondary mb-0.5">Email</p>
          <p className="text-sm text-charcoal">{user.email}</p>
        </div>
        <div className="h-8 w-px bg-gray-100" />
        <div>
          <p className="text-xs text-secondary mb-0.5">Member since</p>
          <p className="text-sm text-charcoal">
            {formatDate(user.memberSince)}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white p-2 rounded-full w-fit">
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`px-5 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "ongoing" ? "bg-gold text-white" : "text-secondary"
          }`}
        >
          Ongoing Orders
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`px-5 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeTab === "past" ? "bg-gold text-white" : "text-secondary"
          }`}
        >
          Past Orders
        </button>
      </div>

      {/* Orders Table */}
      {activeOrders.length === 0 ? (
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
              {activeOrders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-6 py-4 text-charcoal">{order.orderId}</td>
                  <td className="px-6 py-4 text-charcoal">
                    {formatDate(order.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-charcoal">
                    ₦{order.totalPrice.toLocaleString()}
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
}
