/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-27 12:52:06
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-27 12:52:06
 * @FilePath: \ai-saas\components\theme-provider.tsx
 * @Description: 
 */
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
