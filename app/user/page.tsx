"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/zustand/store/auth";
import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";

async function getData(): Promise<Payment[]> {
  return Array.from({ length: 20 }, (_, i) => ({
    id: `id-${i + 1}`,
    amount: 100,
    status: "pending",
    email: `user${i + 1}@example.com`,
  }));
}

export default function DashboardPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      // Only fetch data if user exists
      getData().then(setData);
    }
  }, [user, router]);

  return (
    <div className="px-[40px] text-black">
      <h1 className="text-2xl font-bold mb-4">User</h1>
      <p className="mb-4">Welcome to your User</p>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
