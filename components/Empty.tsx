/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-22 11:27:46
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-22 11:29:04
 * @FilePath: \ai-saas\components\Empty.tsx
 * @Description:
 */
import Image from "next/image";

interface EmptyProps {
	label: string;
}

export const Empty = ({ label }: EmptyProps) => {
	return (
		<div className="h-full p-20 flex flex-col items-center justify-center">
			<div className="relative h-72 w-72">
				<Image alt="Empty" fill src="/empty.png" />
			</div>
			<p className="">{label}</p>
		</div>
	);
};
