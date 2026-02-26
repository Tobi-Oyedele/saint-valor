"use client";

import { useState, useEffect } from "react";
import EmptyState from "./EmptyState";
import { ChevronRight } from "lucide-react";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  memberSince: string;
  role: string;
}

const UserTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://saint-valor-backend.onrender.com/api/v1/admin/users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        const result = await response.json();
        setData(result.data.users);
      } catch {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (data.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="px-15 py-6">
      <h1 className="text-2xl font-semibold mb-6">Users</h1>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-secondary border-b border-border">
            <th className="pb-3 font-normal">Users</th>
            <th className="pb-3 font-normal">Email</th>
            <th className="pb-3 font-normal">Member since</th>
            <th className="pb-3 font-normal"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id} className="border-b border-border">
              <td className="py-4">
                {user.firstName} {user.lastName}
              </td>
              <td className="py-4 text-charcoal">{user.email}</td>
              <td className="py-4 text-charcoal">
                {new Date(user.memberSince).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </td>
              <td className="py-4 text-right">
                <button className="text-sm text-charcoal font-semibold flex items-center gap-1 ml-auto cursor-pointer">
                  More details <ChevronRight size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
