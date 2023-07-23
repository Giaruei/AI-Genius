/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 12:21:34
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-21 19:49:21
 * @FilePath: \ai-saas\components\mobile-sidebar.tsx
 * @Description:
 */
"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const MoblieSidebar = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
  if (!isMounted) return null
  
	return (
		<Sheet>
			<SheetTrigger>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="p-0">
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};

export default MoblieSidebar;
