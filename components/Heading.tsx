import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 19:52:35
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 11:17:42
 * @FilePath: \ai-saas\components\Heading.tsx
 * @Description:
 */
interface HeadingProps {
	title: string;
	description: string;
	icon: LucideIcon;
	iconColor?: string;
	bgColor?: string;
}

const Heading = ({
	title,
	description,
	icon: Icon,
	iconColor,
	bgColor,
}: HeadingProps) => {
	return (
		<div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
			<div className={cn("p-2 w-fit rounded-md", bgColor)}>
				<Icon className={cn("w-10 h-10", iconColor)} />
			</div>
			<div>
				<h2 className="text-3xl font-bold">{title}</h2>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
		</div>
	);
};
export default Heading;
