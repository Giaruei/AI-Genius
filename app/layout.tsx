/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 09:54:39
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 22:54:00
 * @FilePath: \ai-saas\app\layout.tsx
 * @Description:
 */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/ModalProvider";

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
				<body className={inter.className}>
					<ModalProvider />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
