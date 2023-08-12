<!--
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 09:54:39
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-08-12 15:29:39
 * @FilePath: \ai-saas\README.md
 * @Description:
-->
### 克隆本仓库

```shell
git clone https://github.com/Giaruei/AI-Genius.git
```

### 下载依赖

```shell
npm i
```

### 设置 .env 文件（给出了 .env.example 可供修改）


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 初始化 Prisma

添加 MySQL 数据库 (推荐使用 PlanetScale)

```shell
npx prisma db push

```

### 启动项目

```shell
npm run dev
```