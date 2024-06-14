# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install an HTTP server to serve the static files
RUN npm install -g serve

# Set the command to run the HTTP server
CMD ["serve", "-s", "build"]

# Expose port 5000
EXPOSE 5000
