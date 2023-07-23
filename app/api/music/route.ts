/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-22 00:39:25
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 12:03:20
 * @FilePath: \ai-saas\app\api\music\route.ts
 * @Description:
 */
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replivate from "replicate";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const replicate = new Replivate({
	auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { prompt } = body;
		const { userId } = auth();

		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}
		if (!prompt) {
			return new NextResponse("Prompt is required", { status: 400 });
		}

		const freeTrial = await checkApiLimit();
		if (freeTrial) {
			return new NextResponse("Free trial has expired.", { status: 403 });
		}

		const response = await replicate.run(
			"riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
			{
				input: {
					prompt_a: prompt,
				},
			}
		);
		await increaseApiLimit();

		return NextResponse.json(response);
	} catch (error) {
		console.log("[MUSIC_ERROR]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
