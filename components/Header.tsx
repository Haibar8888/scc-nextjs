"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

const getTitle = (path: string) => {
  if (path.startsWith("/dashboard/users")) return "Users";
  if (path.startsWith("/dashboard/settings")) return "Settings";
  if (path.startsWith("/dashboard")) return "Dashboard";
  if (path.startsWith("/emergency")) return "Emergency";
  return "Page";
};

const Header = () => {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <div className="bg-[#FFFFFF] mb-[20px] text-[#1E1E1E] px-[40px] py-[21px] w-full h-[80px] flex flex-row justify-between items-center border-b border-gray-100">
      <h1>{title}</h1>
      <div className="flex gap-[14px] items-center">
        <Image src="/assets/messages.png" alt="" width={24} height={24} />
        <Image src="/assets/notification.svg" alt="" width={24} height={24} />
        <Image src="/assets/profile.png" alt="" width={30} height={30} />
      </div>
    </div>
  );
};

export default Header;
