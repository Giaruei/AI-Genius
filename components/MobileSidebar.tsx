/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 12:21:34
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 10:25:56
 * @FilePath: \ai-saas\components\MobileSidebar.tsx
 * @Description:
 */
"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
	apiLimitCount: number;
	isPro: boolean;
}

const MoblieSidebar = ({
	apiLimitCount = 0,
	isPro = false,
}: MobileSidebarProps) => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) return null;

	return (
		<Sheet>
			<SheetTrigger>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="p-0">
				<Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
			</SheetContent>
		</Sheet>
	);
};

export default MoblieSidebar;
