// app/dashboard/layout.tsx
import Sidebar from '@/components/Sidebar';
import React from 'react';
import Header from '@/components/Header';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<main className="flex-1 bg-[#FFFFFF]">
				<Header />
				{children}
			</main>
		</div>
	);
}
