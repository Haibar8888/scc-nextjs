"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/zustand/store/auth";
import { DataTable } from "./data-table";
import { User, columns } from "./columns";

export default function DashboardPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.user?.token);

  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    if (!user) {
      router.push("/login");
    } else {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:8080/api/v1/users", {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (!res.ok) throw new Error("Failed to fetch");

          const json = await res.json();
          const users: User[] = (json.data || []).map((item: any) => ({
            id: item.ID.toString(),
            name:
              item.Email === user.email
                ? `${item.Name} (Saya)` // <== Menambahkan label “Saya”
                : item.Name,
            email: item.Email,
          }));

          setData(users);
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [user, token, router, isHydrated]);

  if (!isHydrated || loading) return <p>Loading...</p>;

  return (
    <div className="px-[40px] text-black">
      <h1 className="text-2xl font-bold mb-4">User</h1>
      <p className="mb-4">Welcome to your User</p>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
