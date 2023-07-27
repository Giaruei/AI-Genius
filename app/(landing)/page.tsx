import { LandingContent } from "@/components/LandingContent";
import { LandingHero } from "@/components/LandingHero";
import { LandingNavbar } from "@/components/LandingNavbat";

/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 10:36:25
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 13:10:09
 * @FilePath: \ai-saas\app\(landing)\page.tsx
 * @Description:
 */
const LandingPage = () => {
	return (
		<div className="h-full">
			<LandingNavbar />
			<LandingHero />
			<LandingContent />
		</div>
	);
};

export default LandingPage;
