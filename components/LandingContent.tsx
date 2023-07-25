/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-25 11:52:42
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 12:07:15
 * @FilePath: \ai-saas\components\LandingContent.tsx
 * @Description:
 */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
	{
		name: "Antoio",
		avatar: "A",
		title: "Software Engineer",
		description: "This is the best application I've used!",
	},
	{
		name: "Antoio",
		avatar: "A",
		title: "Software Engineer",
		description: "This is the best application I've used!",
	},
	{
		name: "Antoio",
		avatar: "A",
		title: "Software Engineer",
		description: "This is the best application I've used!",
	},
	{
		name: "Antoio",
		avatar: "A",
		title: "Software Engineer",
		description: "This is the best application I've used!",
	},
];
export const LandingContent = () => {
	return (
		<div className="px-10">
			<h2 className="text-center text-4xl text-white font-extrabold mb-10">
				Testimonials
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{testimonials.map((item) => (
					<Card
						key={item.description}
						className="bg-[#192339] border-none text-white"
					>
						<CardHeader>
							<CardTitle className="flex items-center gap-x-2">
								<div>
									<p className="text-lg">{item.name}</p>
									<p className="text-sm text-zinc-400">{item.title}</p>
								</div>
							</CardTitle>
							<CardContent className="pt-4 px-0">
								{item.description}
							</CardContent>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
};
