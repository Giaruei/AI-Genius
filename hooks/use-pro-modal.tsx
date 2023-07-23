/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-23 22:42:46
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 23:12:54
 * @FilePath: \ai-saas\hooks\use-pro-modal.tsx
 * @Description:
 */
import { create } from "zustand";

interface useProModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
	isOpen: true,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
