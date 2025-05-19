'use client';
import { usePathname } from 'next/navigation';
const getTitle = (path: string) => {
	if (path.startsWith('/dashboard/users')) return 'Users';
	if (path.startsWith('/dashboard/settings')) return 'Settings';
	if (path.startsWith('/dashboard')) return 'Dashboard';
	if (path.startsWith('/emergency')) return 'Emergency';
	return 'Page';
};

const Header = () => {
	const pathname = usePathname();
	const title = getTitle(pathname);

	return (
		<div className="bg-[#FFFFFF] mb-[20px] text-[#1E1E1E] px-[40px] py-[21px] w-full h-[80px] flex flex-row justify-between items-center border-b border-gray-100">
			<h1>{title}</h1>
			<div className="flex gap-2">
				<p>profile</p>
				<p>about</p>
				<p>logout</p>
			</div>
		</div>
	);
};

export default Header;
