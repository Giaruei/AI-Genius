/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-24 19:57:34
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-24 20:11:47
 * @FilePath: \ai-saas\app\(dashboard)\(routes)\settings\page.tsx
 * @Description:
 */
import Heading from "@/components/Heading";
import { SubscriptionButton } from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";
const SettingsPage = async () => {
	const isPro = await checkSubscription();
	return (
		<div>
			<Heading
				title="Settings"
				description="Manage account settings."
				icon={Settings}
				iconColor="text-gray-700"
				bgColor="bg-gray-700/10"
			/>
			<div className="px-4 lg:px-8 space-y-4">
				<div className="text-sm text-muted-foreground">
					{isPro
						? "You are currently on a pro plan."
						: "You are currently on a free plan."}
				</div>
				<SubscriptionButton isPro={isPro} />
			</div>
		</div>
	);
};

export default SettingsPage;
