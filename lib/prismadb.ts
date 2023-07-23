/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-23 21:19:22
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 21:19:29
 * @FilePath: \ai-saas\lib\prismadb.ts
 * @Description:
 */
import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
