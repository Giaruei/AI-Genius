/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-23 23:11:05
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 11:20:05
 * @FilePath: \ai-saas\components\ui\badge.tsx
 * @Description:
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
				outline: "text-foreground",
				premium:
					"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary-foreground border-0",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
