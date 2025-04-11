# Use official Node.js base image (slim for smaller size)
FROM node:18

# Set working directory
WORKDIR /my-app

# Copy app files
COPY my-app/ .
# COPY my-app/tsconfig.json ./
# COPY my-app/next.config.ts ./
# COPY my-app/eslint.config.mjs ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY my-app/ .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
