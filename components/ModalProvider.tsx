/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-23 22:50:06
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 10:24:19
 * @FilePath: \ai-saas\components\ModalProvider.tsx
 * @Description:
 */
"use client";

import { useEffect, useState } from "react";
import { ProModal } from "./ProModal";

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) return null;

  return (
    <>
      <ProModal />
    </>
  )
};
