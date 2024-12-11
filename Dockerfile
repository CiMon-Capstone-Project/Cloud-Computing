# Stage 1: Build
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Package
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 9001
CMD ["npm", "start"]
