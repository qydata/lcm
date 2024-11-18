# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app

RUN corepack enable

# 拷贝必要文件
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY ./ ./
RUN pnpm run build

# Stage 2: Production
FROM node:18-slim AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# 仅复制生产所需的文件
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN chmod +rx ./server.js

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
