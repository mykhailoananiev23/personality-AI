# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app (adjust the command based on your build setup)
RUN npm run build

# Expose port 80 to the outside world
EXPOSE 80

# Define the command to run your app using serve (or any other server you prefer)
CMD ["npx", "serve", "-s", "build"]
