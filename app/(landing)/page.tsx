import { Button } from "@/components/ui/button";
import Link from "next/link";

/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 10:36:25
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-21 11:16:10
 * @FilePath: \ai-saas\app\(landing)\page.tsx
 * @Description:
 */
const LandingPage = () => {
	return (
		<div>
			Landing Page (Unprotected)
			<div>
				<Link href="/sign-in">
					<Button>Login</Button>
				</Link>
				<Link href="/sign-up">
					<Button>Register</Button>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
