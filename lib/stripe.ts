/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-24 11:40:36
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-24 11:40:36
 * @FilePath: \ai-saas\lib\stripe.ts
 * @Description:
 */
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
	apiVersion: "2022-11-15",
	typescript: true,
});
