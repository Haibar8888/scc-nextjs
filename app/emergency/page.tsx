"use client";

import dynamic from "next/dynamic";

// Load EmergencyPageClient hanya di client (no SSR)
const EmergencyPageClient = dynamic(() => import("./EmergencyPageClient"), {
  ssr: false,
});

export default function EmergencyPage() {
  return <EmergencyPageClient />;
}
