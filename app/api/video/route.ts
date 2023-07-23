/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-22 00:39:25
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 15:59:59
 * @FilePath: \ai-saas\app\api\video\route.ts
 * @Description:
 */
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replivate from "replicate";

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

		const response = await replicate.run(
			"anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
			{
				input: {
					prompt,
				},
			}
		);

		return NextResponse.json(response);
	} catch (error) {
		console.log("[VIDEO_ERROR]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
