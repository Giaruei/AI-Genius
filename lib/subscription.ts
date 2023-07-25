/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-24 14:38:52
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 10:28:47
 * @FilePath: \ai-saas\lib\subscription.ts
 * @Description:
 */
import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
	const { userId } = auth();

	if (!userId) return false;

	const userSubscription = await prismadb.userSubscription.findUnique({
		where: {
			userId: userId,
		},
		select: {
			stripeSubscriptionId: true,
			stripeCurrentPeriodEnd: true,
			stripeCustomerId: true,
			stripePriceId: true,
		},
	});
	if (!userSubscription) return false;

	const isValid =
		userSubscription.stripePriceId &&
		userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
			Date.now();

	return !!isValid;
};
