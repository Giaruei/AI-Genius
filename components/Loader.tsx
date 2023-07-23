/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-22 11:34:13
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-22 11:36:40
 * @FilePath: \ai-saas\components\Loader.tsx
 * @Description:
 */
import Image from "next/image"
export const Loader = () => {
  return <div className="h-full flex flex-col gap-y-4 items-center justify-center">
    <div className="w-10 h-10 relative animate-spin">
      <Image alt="logo" fill src='/logo.png' />
    </div>
    <p className="text-sm to-muted-foreground">
      Genius is thinking...
    </p>
  </div>
}