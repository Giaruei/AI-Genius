/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 11:12:23
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-21 11:13:46
 * @FilePath: \ai-saas\app\(auth)\(routes)\layout.tsx
 * @Description:
 */
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex items-center justify-center h-full">{children}</div>
	);
};

export default AuthLayout;
