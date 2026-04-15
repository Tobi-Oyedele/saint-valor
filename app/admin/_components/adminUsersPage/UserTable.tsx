"use client";

import { useState, useEffect } from "react";
import EmptyState from "./EmptyState";
import { ChevronRight } from "lucide-react";
import UserTableSkeleton from "./UserTableSkeleton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { formatDate } from "@/lib/utils";
import { User } from "@/types/adminUsers";
import { getAllUsers } from "@/lib/api/admin/adminUsers";
import { Pagination } from "@/types/pagination";
import PaginationControls from "../adminUI/PaginationControls";

const UserTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [page, setPage] = useState(1);

  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { users, pagination } = await getAllUsers(page);
        setData(users);
        setPagination(pagination);
      } catch {
        toast.error("Could not load users.");
        setError("Could not load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  if (loading) return <UserTableSkeleton />;
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
                {formatDate(user.memberSince)}
              </td>
              <td className="py-4 text-right">
                <button
                  onClick={() => router.push(`/admin/users/${user._id}`)}
                  className="text-sm text-charcoal font-semibold flex items-center gap-1 ml-auto cursor-pointer"
                >
                  More details <ChevronRight size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && (
        <PaginationControls pagination={pagination} onPageChange={setPage} />
      )}
    </div>
  );
};

export default UserTable;
