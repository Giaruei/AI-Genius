/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-25 11:24:36
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 11:31:17
 * @FilePath: \ai-saas\components\LandingNavbat.tsx
 * @Description:
 */
"use client";

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Montserrat({
	weight: "600",
	subsets: ["latin"],
});

export const LandingNavbar = () => {
	const { isSignedIn } = useAuth();

	return (
		<nav className="p-4 bg-transparent flex items-center justify-between">
			<Link href="/" className="flex items-center">
				<div className="relative h-8 w-8 mr-4">
					<Image fill alt="Logo" src="/logo.png" />
				</div>
				<h1 className={cn("text-2xl font-bold text-white", font.className)}>
					Genius
				</h1>
			</Link>
			<div className="flex items-center gap-x-2">
				<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant='outline' className="rounded-full">
            Get Started
          </Button>
        </Link>
			</div>
		</nav>
	);
};
