/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 11:28:11
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-27 13:11:16
 * @FilePath: \ai-saas\components\Navbar.tsx
 * @Description:
 */
import { UserButton } from "@clerk/nextjs";
import MoblieSidebar from "./MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { ModeToggle } from "./ModeToggle";

const Navbar = async () => {
	const apiLimitCount = await getApiLimitCount();
	const isPro = await checkSubscription();
	return (
		<div className="flex items-center p-4">
			<MoblieSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
			<div className="flex justify-end items-center w-full gap-x-2">
				<UserButton afterSignOutUrl="/" />
				<ModeToggle />
			</div>
		</div>
	);
};
export default Navbar;
