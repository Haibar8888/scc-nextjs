"use client";

import { useAuthStore } from "@/zustand/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  // const logout = useAuthStore((state) => state.logout)
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  return (
    <div className="px-[40px] text-black">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your admin dashboard!</p>
    </div>
  );
}
