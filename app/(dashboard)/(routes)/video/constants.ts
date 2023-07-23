/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 20:21:31
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-23 15:58:18
 * @FilePath: \ai-saas\app\(dashboard)\(routes)\video\constants.ts
 * @Description:
 */
import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Video Prompt is required'
  })
})