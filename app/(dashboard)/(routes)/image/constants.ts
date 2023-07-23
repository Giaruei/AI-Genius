/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 20:21:31
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 11:05:05
 * @FilePath: \ai-saas\app\(dashboard)\(routes)\image\constants.ts
 * @Description:
 */
import * as z from "zod";

export const formSchema = z.object({
	prompt: z.string().min(1, {
		message: "Image Prompt is required",
	}),
	amount: z.string().min(1),
	resolution: z.string().min(1),
});

export const amountOptions = [
	{
		value: "1",
		label: "1 Photo",
	},
	{
		value: "2",
		label: "2 Photos",
	},
	,
	{
		value: "3",
		label: "3 Photos",
	},
	{
		value: "4",
		label: "4 Photos",
	},
	{
		value: "5",
		label: "5 Photos",
	},
];

export const resolutionOptions = [
	{
		value: "256x256",
		label: "256x256",
	},
	{
		value: "512x512",
		label: "512x512",
	},
	{
		value: "1024x1024",
		label: "1024x1024",
	},
];
