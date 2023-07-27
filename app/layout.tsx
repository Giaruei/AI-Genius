/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 09:54:39
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-27 12:55:20
 * @FilePath: \ai-saas\app\layout.tsx
 * @Description:
 */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/ModalProvider";
import { ToasterProvider } from "@/components/ToasterProvider";
import { CrispProvider } from "@/components/CrispProvider";
import { ThemeProvider } from "@/components/theme-provider";

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
				<CrispProvider />
				<body className={inter.className}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<ModalProvider />
						<ToasterProvider />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
