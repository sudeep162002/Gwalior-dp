# Use the official Node.js 14 Alpine image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Git
RUN apk update && apk upgrade && \
    apk add --no-cache git

# Install ts-node and nodemon globally
RUN npm install -g ts-node nodemon

# Copy the TypeScript configuration and source code
COPY tsconfig.json .
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port
EXPOSE 3000

# Command to start the application using nodemon
CMD ["nodemon", "dist/index.js"]
