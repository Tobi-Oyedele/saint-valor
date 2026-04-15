import api from "@/lib/axios";
import { User } from "@/types/adminUsers";

export async function getAllUsers(): Promise<User[]> {
  const res = await api.get("/admin/users");
  return res.data.data.users;
}
