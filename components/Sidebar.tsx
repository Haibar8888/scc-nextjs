// components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image"; // opsional, buat bantu toggle class
import { LayoutDashboard, Ambulance, Settings, UserPen } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-[#FFFFFF] text-[#252F4A] p-8 border-r border-gray-100">
      <Image src="/assets/logo.png" alt="" width={135} height={22} />
      <nav className="flex flex-col space-y-2 mt-[20px]">
        <Link
          href="/dashboard"
          className={clsx(
            "flex items-center gap-[10px] p-2 rounded hover:text-[#1B84FF]",
            pathname === "/dashboard" && "text-[#1B84FF]"
          )}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link
          href="/emergency"
          className={clsx(
            "flex items-center gap-[10px] p-2 rounded hover:text-[#1B84FF]",
            pathname === "/emergency" && "text-[#1B84FF]"
          )}
        >
          <Ambulance size={20} />
          Emergency
        </Link>
        <Link
          href="/user"
          className={clsx(
            "flex items-center gap-[10px] p-2 rounded hover:text-[#1B84FF]",
            pathname === "/user" && "text-[#1B84FF]"
          )}
        >
          <UserPen size={20} />
          Users
        </Link>
        <Link
          href="/dashboard/settings"
          className={clsx(
            "flex items-center gap-[10px] p-2 rounded hover:text-[#1B84FF]",
            pathname === "/dashboard/settings" && "text-[#1B84FF]"
          )}
        >
          <Settings size={20} />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
