import { Avatar, AvatarImage } from "./ui/avatar";

/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-22 11:44:26
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-08-11 19:40:37
 * @FilePath: \ai-saas\components\BotAvater.tsx
 * @Description:
 */
export const BotAvater = () => {
	return (
		<Avatar className="h-8 w-8">
			<AvatarImage className="p-1" src="/logo.png" />
		</Avatar>
	);
};
