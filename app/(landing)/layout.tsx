/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-25 11:13:33
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 12:10:33
 * @FilePath: \ai-saas\app\(landing)\layout.tsx
 * @Description:
 */
const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="bg-[#111827] pb-8">
			<div className="max-auto h-full w-full">{children}</div>
		</main>
	);
};

export default LandingLayout;
