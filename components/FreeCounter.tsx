"use client";
/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-23 22:07:48
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 22:29:06
 * @FilePath: \ai-saas\components\FreeCounter.tsx
 * @Description:
 */
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

interface FreeCounterProps {
	apiLimitCount: number;
}
export const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;

	return (
		<div className="px-3">
			<Card className="bg-white/10 border-0">
				<CardContent className="py-6">
					<div className="text-center text-sm text-white mb-4 space-y-2">
						<p>
							{apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
						</p>
						<Progress
							className="h-3"
							value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
						/>
					</div>
					<Button className="w-full" variant="premium">
						Upgrade
						<Zap className="w-4 h-4 ml-2 fill-white" />
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};