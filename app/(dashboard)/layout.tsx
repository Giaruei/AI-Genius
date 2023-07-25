/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 11:21:36
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 10:23:42
 * @FilePath: \ai-saas\app\(dashboard)\layout.tsx
 * @Description:
 */
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const apiLimitCount = await getApiLimitCount();
	const isPro = await checkSubscription();

	return (
		<div className="h-full relative">
			<div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
				<Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
			</div>
			<main className="md:pl-72">
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
