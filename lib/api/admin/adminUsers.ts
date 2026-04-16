import api from "@/lib/axios";
import { User } from "@/types/adminUsers";
import { Pagination } from "@/types/pagination";

export async function getAllUsers(
  page = 1,
): Promise<{ users: User[]; pagination: Pagination }> {
  try {
    const res = await api.get("/admin/users", { params: { page } });
    return {
      users: res.data.data.users,
      pagination: res.data.pagination,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch products.",
    );
  }
}
