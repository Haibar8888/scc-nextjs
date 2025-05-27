"use client";

import dynamic from "next/dynamic";
import { useAuthStore } from "@/zustand/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Load EmergencyPageClient hanya di client (no SSR)
const EmergencyPageClient = dynamic(() => import("./EmergencyPageClient"), {
  ssr: false,
});

export default function EmergencyPage() {
  const user = useAuthStore((state) => state.user);
  // const logout = useAuthStore((state) => state.logout)
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  return <EmergencyPageClient />;
}
