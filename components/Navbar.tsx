/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 11:28:11
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 23:42:10
 * @FilePath: \ai-saas\components\Navbar.tsx
 * @Description:
 */
import { UserButton } from "@clerk/nextjs";
import MoblieSidebar from "./MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
	const apiLimitCount = await getApiLimitCount();
	return (
		<div className="flex items-center p-4">
			<MoblieSidebar apiLimitCount={apiLimitCount} />
			<div className="flex justify-end w-full">
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};
export default Navbar;
