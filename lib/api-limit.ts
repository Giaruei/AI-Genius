/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-23 21:34:58
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 21:43:26
 * @FilePath: \ai-saas\lib\api-limit.ts
 * @Description:
 */
import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
	const { userId } = auth();
	if (!userId) return;

	const userApiLimit = await prismadb.userApiLimit.findUnique({
		where: {
			userId,
		},
	});
	if (userApiLimit) {
		await prismadb.userApiLimit.update({
			where: {
				userId: userId,
			},
			data: {
				count: userApiLimit.count + 1,
			},
		});
	} else {
		await prismadb.userApiLimit.create({
			data: {
				userId: userId,
				count: 1,
			},
		});
	}
};

export const checkApiLimit = async () => {
	const { userId } = auth();
	if (!userId) return false

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId: userId
    }
  })
  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true
  } else {
    return false
  }
};