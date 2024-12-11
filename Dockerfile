# Single-stage Dockerfile
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 9001

# Command to run the application
CMD ["npm", "start"]
