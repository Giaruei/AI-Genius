/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-24 20:04:17
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 11:01:13
 * @FilePath: \ai-saas\components\SubscriptionButton.tsx
 * @Description:
 */
"use client";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
	isPro: boolean;
}
export const SubscriptionButton = ({
	isPro = false,
}: SubscriptionButtonProps) => {
	const [loading, setLoading] = useState(false);

	const onClick = async () => {
		try {
			setLoading(true);
			const response = await axios.get("/api/stripe");
			window.location.href = response.data.url;
		} catch (error) {
			toast.error("Someting went wrong.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Button
			onClick={onClick}
			disabled={loading}
			variant={isPro ? "default" : "premium"}
		>
			{isPro ? "Manage Subscription" : "Upgrade"}
			{!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
		</Button>
	);
};
