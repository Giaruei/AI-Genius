/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-22 13:56:04
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-22 14:31:27
 * @FilePath: \ai-saas\app\api\code\route.ts
 * @Description:
 */
import axios from "axios";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { HttpProxyAgent } from "http-proxy-agent"; // 引入http-proxy-agent库

const proxyHost = "127.0.0.1"; // 替换为你的VPN代理地址
const proxyPort = 7890; // 替换为你的VPN代理端口
const proxyUrl = `http://${proxyHost}:${proxyPort}`;

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
	role: "system",
	content:
		"You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
};

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

		// 创建一个使用代理的axios实例
		// const axiosInstance = axios.create({
		// 	baseURL: "https://api.openai.com/v1",
		// 	headers: {
		// 		Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
		// 	},
		// 	httpAgent: new HttpProxyAgent(proxyUrl),
		// });
		// const response = await axiosInstance.post("/chat/completions", {
		// 	model: "gpt-3.5-turbo",
		// 	messages: [instructionMessage, ...messages],
		// });

		// return new NextResponse(JSON.stringify(response.data.choices[0].message));
		const response = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [instructionMessage, ...messages],
		});
		return NextResponse.json(response.data.choices[0].message);
	} catch (error) {
		console.log("[CODE_ERROR]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
