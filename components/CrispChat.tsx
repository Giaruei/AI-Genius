/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-25 11:05:13
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 11:07:36
 * @FilePath: \ai-saas\components\CrispChat.tsx
 * @Description:
 */
"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("2ef27c6d-2a82-4be6-adf0-d2f2bab89b12");
	}, []);
  return null
};
