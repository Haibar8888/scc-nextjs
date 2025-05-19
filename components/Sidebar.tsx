// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; // opsional, buat bantu toggle class

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className="w-64 h-screen bg-[#FFFFFF] text-[#252F4A] p-8 border-r border-gray-100">
			<h2 className="text-xl font-bold mb-6">Admin Panel</h2>
			<nav className="flex flex-col space-y-2">
				<Link
					href="/dashboard"
					className={clsx(
						'p-2 rounded hover:text-[#1B84FF]',
						pathname === '/dashboard' && 'text-[#1B84FF]'
					)}
				>
					Dashboard
				</Link>
				<Link
					href="/emergency"
					className={clsx(
						'p-2 rounded hover:text-[#1B84FF]',
						pathname === '/emergency' && 'text-[#1B84FF]'
					)}
				>
					Emergency
				</Link>
				<Link
					href="/dashboard/users"
					className={clsx(
						'p-2 rounded hover:text-[#1B84FF]',
						pathname === '/dashboard/users' && 'text-[#1B84FF]'
					)}
				>
					Users
				</Link>
				<Link
					href="/dashboard/settings"
					className={clsx(
						'p-2 rounded hover:text-[#1B84FF]',
						pathname === '/dashboard/settings' && 'text-[#1B84FF]'
					)}
				>
					Settings
				</Link>
			</nav>
		</aside>
	);
};

export default Sidebar;
