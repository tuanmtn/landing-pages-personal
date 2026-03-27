# Stage 1: Build máy ảo để biên dịch source
FROM node:22-alpine AS builder

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép tệp dependencies
# Ở máy thật bạn đang dùng npm (do xung đột pnpm workspace)
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ source code
COPY . .

# Build dự án (kết quả sẽ nằm trong thư mục .output)
RUN npm run build

# Stage 2: Runtime image (chỉ chạy kết quả build để nhẹ nhất)
FROM node:22-alpine AS runner

WORKDIR /app

# Chỉ sao chép kết quả build từ stage trước
COPY --from=builder /app/.output ./.output

# Thiết lập môi trường sản xuất
ENV NODE_ENV=production
ENV PORT=3000

# Mở cổng 3000 (Nitro mặc định dùng cổng này)
EXPOSE 3000

# Chạy server Nitro
# Lệnh chạy chính thức của TanStack Start/Nitro build
CMD ["node", ".output/server/index.mjs"]
