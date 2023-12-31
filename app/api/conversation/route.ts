/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-22 00:39:25
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 21:51:47
 * @FilePath: \ai-saas\app\api\conversation\route.ts
 * @Description:
 */
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { messages } = body;
		const { userId } = auth();

		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}
		if (!configuration.apiKey) {
			return new NextResponse("OpenAI API Key not configured", { status: 500 });
		}
		if (!messages) {
			return new NextResponse("Messages are required", { status: 400 });
		}

		const freeTrial = await checkApiLimit();
		const isPro = await checkSubscription();

		if (!freeTrial && !isPro) {
			return new NextResponse("Free trial has expired.", { status: 403 });
		}

		const response = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages,
		});
		console.log(response);

		if (!isPro) {
			await increaseApiLimit();
		}

		return NextResponse.json(response.data.choices[0].message);
	} catch (error) {
		console.log("[CONVERSATION_ERROR]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
