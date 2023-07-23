/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 11:04:11
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-21 11:10:47
 * @FilePath: \ai-saas\middleware.ts
 * @Description:
 */
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
	publicRoutes: ["/"],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
