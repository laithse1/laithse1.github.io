# --- build stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./ 2>/dev/null || true
RUN npm i
COPY . .
RUN npm run build

# --- runtime stage ---
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
