"use client";
/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-25 11:32:18
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 12:07:44
 * @FilePath: \ai-saas\components\LandingHero.tsx
 * @Description:
 */
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
	const { isSignedIn } = useAuth();
	return (
		<div className="text-white font-bold py-36 text-center space-y-5">
			<div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
				<h1>The Best AI Tool for</h1>
				<div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
					<TypewriterComponent
						options={{
							strings: [
								"Chatbot.",
								"Photo Generation.",
								"Music Generation.",
								"Video Generation.",
								"Code Generation.",
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
			<div className="text-sm md:text-xl font-light text-zinc-400">
				Create content using AI 10x faster.
			</div>
			<div>
				<Link href={isSignedIn ? "/dashboard" : "sign-up"}>
					<Button
						variant="premium"
						className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
					>
						Start Generating for free
					</Button>
				</Link>
			</div>
			<div className="text-xs md:text-sm text-zinc-600 font-normal">
				No credit card required.
			</div>
		</div>
	);
};
