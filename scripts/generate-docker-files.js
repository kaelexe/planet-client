require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const path = require("path");

const port = process.env.PORT || 5173;

const dockerfileContent = `# Build stage vite no longer support 18
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port ${port} (from .env)
EXPOSE ${port}

CMD ["npm", "run", "dev"]
`;

const dockerComposeContent = `version: "3.8"

services:
  web:
    container_name: planet-web
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "${port}:${port}"
    env_file:
      - .env
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
    networks:
      - planet_network

networks:
  planet_network:
    external: true
`;

const dockerfilePath = path.join(__dirname, "..", "Dockerfile.dev");
const composePath = path.join(__dirname, "..", "docker-compose.yml");

let generated = false;
if (fs.existsSync(dockerfilePath)) {
  console.log("Dockerfile.dev already exists. Skipping generation.");
} else {
  fs.writeFileSync(dockerfilePath, dockerfileContent);
  generated = true;
}

if (fs.existsSync(composePath)) {
  console.log("docker-compose.yml already exists. Skipping generation.");
} else {
  fs.writeFileSync(composePath, dockerComposeContent);
  generated = true;
}

if (generated) {
  console.log("Docker files generated successfully.");
} else {
  console.log("Docker files already exist. No generation needed.");
}
