"use client";

import { useState, useEffect } from "react";
import EmptyState from "./EmptyState";

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
        console.log(result);
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

  return <div>UserTable</div>;
};

export default UserTable;
