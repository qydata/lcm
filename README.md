# 私密朋友圈

## 项目简介
私密朋友圈是一款基于区块链技术的私密社交应用，旨在为用户提供更加安全和私密的朋友圈体验。用户可以通过加密方式发布图文、视频、音频等信息，并支持私密聊天功能。所有数据通过加密处理后存储在 IPFS 上，并在区块链上记录相关元数据。

## 技术栈
- **框架**: [Next.js](https://nextjs.org/)
- **UI 框架**: [NextUI](https://nextui.org/)
- **本地存储**: [idb-keyval](https://github.com/jakearchibald/idb-keyval)
- **钱包交互**: [wagmi](https://wagmi.sh/) 和 [viem](https://viem.sh/)
- **去中心化存储**: [IPFS](https://ipfs.tech/)
- **区块链索引**: [The Graph](https://thegraph.com/)
- **即时通讯协议**: [XMTP](https://xmtp.org/)

## 项目功能

### 1. 多身份管理
- 用户通过钱包登录后，可以创建多个身份。
- 每个身份独立管理，支持切换身份发布内容。

### 2. 私密内容发布
- 用户可以发布加密的文章、图片、视频、音频等内容。
- 内容在上传前经过本地加密，上传至 IPFS，并将地址记录到区块链。

### 3. 数据解密与查看
- 通过 The Graph 获取区块链和 IPFS 上的数据。
- 用户在本地解密后查看对应内容，保证数据安全和隐私。

### 4. 私密聊天功能
- 支持基于 XMTP 协议的聊天功能。
- 提供端到端加密聊天，保证通信隐私。

## 项目结构
```
.
├── src
│   ├── components         # 组件目录
│   ├── pages              # 页面目录
│   ├── styles             # 样式文件
│   └── public             # 静态资源
├── public              # 静态文件
├── package.json        # 项目信息
└── README.md           # 项目说明文件


```

## 安装与运行

### 环境要求
- Node.js 版本 >=16.x <=22.x
- pnpm

### 克隆项目
```bash
git clone https://github.com/qydata/lcm.git
cd lcm
```

### 安装依赖
```bash
pnpm install
```

### 本地运行
```bash
pnpm run dev
```
访问 `http://localhost:4783` 查看应用。

### 构建项目
```bash
pnpm run build
```

### 部署
使用 Next.js 提供的部署方式，例如 Nginx 或 Vercel。

## 使用指南

1. 打开应用并通过钱包登录。
2. 创建一个或多个身份。
3. 选择身份并发布私密内容。
4. 查看加密内容，或使用聊天功能与好友私密通信。
