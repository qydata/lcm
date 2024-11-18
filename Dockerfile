# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

RUN corepack enable

# 拷贝项目文件
COPY ./ ./

# 安装依赖并构建
RUN pnpm install --frozen-lockfile   # 确保锁文件固定版本，避免不必要的变化
RUN pnpm build

# Stage 2: Production
FROM node:18-slim AS runner

WORKDIR /app

RUN corepack enable

# 仅复制生产构建结果和必要的文件
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml

# 安装生产依赖（确保工作区依赖被正确安装）
RUN pnpm install --prod --frozen-lockfile

# 暴露端口
EXPOSE 3000

# 启动 Next.js 应用
CMD ["pnpm", "start"]
