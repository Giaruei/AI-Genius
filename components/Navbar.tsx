/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 11:28:11
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-22 11:44:52
 * @FilePath: \ai-saas\components\navbar.tsx
 * @Description:
 */
import { UserButton } from "@clerk/nextjs";
import MoblieSidebar from "./Mobile-sidebar";

const Navbar = () => {
	return (
		<div className="flex items-center p-4">
			<MoblieSidebar />
			<div className="flex justify-end w-full">
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};
export default Navbar;
