/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-22 11:39:59
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 23:41:37
 * @FilePath: \ai-saas\components\UserAvater.tsx
 * @Description: 
 */
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const UserAvater = () => {
	const { user } = useUser();

	return (
		<Avatar className="h-8 w-8">
			<AvatarImage src={user?.profileImageUrl} />
			<AvatarFallback>
				{user?.firstName?.charAt(0)}
				{user?.lastName?.charAt(0)}
			</AvatarFallback>
		</Avatar>
	);
};
