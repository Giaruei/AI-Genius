/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 09:54:39
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-21 11:03:32
 * @FilePath: \ai-saas\app\layout.tsx
 * @Description:
 */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Genius",
	description: "AI Platform",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
